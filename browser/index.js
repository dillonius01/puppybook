'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import rootReducer from './reducer';
import { fetchPuppies, fetchPuppy, leavePup } from './action-creators';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


// ONENTER & ONLEAVE
const onAppEnter = () => {
  return store.dispatch(fetchPuppies())
}

const onPupperLeave = () => {
	return store.dispatch(leavePup())
}

// note: nextState is Router state
const onPuppyEnter = (nextState) => {
	store.dispatch(fetchPuppy(nextState.params.id))
}


class MainApp extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={store}>
    <Router history= { hashHistory }>
        <Route path="/" onEnter={ onAppEnter } component={ MainApp }>
          <IndexRoute component={ AllPuppiesContainer } />
          <Route path="puppies" component={ AllPuppiesContainer } />
          <Route path="puppies/:id" onEnter={ onPuppyEnter } onLeave={ onPupperLeave } component={ SinglePuppyContainer } />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
