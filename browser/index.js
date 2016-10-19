'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import AllPuppiesContainer from './AllPuppiesContainer';
import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
			<IndexRoute path="/">
			<Route path="puppies" component={AllPuppiesContainer} />
			</IndexRoute>
	  </Router>
	</Provider>,
  document.getElementById('app')
);
