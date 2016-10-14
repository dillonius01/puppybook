'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppy from './SinglePuppy';
import puppyReducer from './reducer';
import { fetchPuppies } from './action-creators';

const store = createStore(puppyReducer, applyMiddleware(thunkMiddleware));

const onAppEnter = () => {
  return store.dispatch(fetchPuppies())
}

class BaseRoute extends React.Component {

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
        <Route path="/" onEnter={ onAppEnter } component={ BaseRoute }>
          <IndexRoute component={ AllPuppiesContainer } />
          <Route path="puppies" component={ AllPuppiesContainer } />
          <Route path="puppies/:puppyId" component={ SinglePuppy } />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
