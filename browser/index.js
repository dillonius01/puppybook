'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import store from './store';

import { fetchPuppies, fetchSinglePuppy } from './action-creators';

// Root Component
class RootComponent extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

// OnEnter functions
const getPuppiesOnLoad = () => {
	return store.dispatch(fetchPuppies())
};

const getSinglePuppyOnLoad = (nextRouterState) => {
	return store.dispatch(fetchSinglePuppy(nextRouterState.params.id))
};



ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
			<Route path="/" component={ RootComponent } onEnter={ getPuppiesOnLoad }>
				<IndexRedirect to="puppies" />
				<Route path="puppies" component={AllPuppiesContainer} />
				<Route path="puppies/:id" onEnter={ getSinglePuppyOnLoad } component={SinglePuppyContainer} />
	  	</Route>
	  </Router>
	</Provider>,
  document.getElementById('app')
);
