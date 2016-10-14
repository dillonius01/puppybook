'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AllPuppiesContainer from './AllPuppiesContainer';
import puppyReducer from './reducer';

const store = createStore(puppyReducer);

ReactDOM.render(
  <Provider store={store}>
	  <div className="container flexbox-container">
	    <div className="jumbotron">
	      <AllPuppiesContainer />
	    </div>
	  </div>
  </Provider>,
  document.getElementById('app')
);
