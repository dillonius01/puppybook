import { combineReducers } from 'redux';
import { RENDER_PUPPIES, RENDER_SINGLE_PUPPY } from './action-creators'

const allPuppiesReducer = (previousState = [], action) => {
	switch (action.type) {
		case RENDER_PUPPIES:
			return action.allPuppies;
		default:
			return previousState;
	}
};

const singlePuppyReducer = (previousState = {}, action) => {
	switch (action.type) {
		case RENDER_SINGLE_PUPPY:
			return action.puppy;
		default:
			return previousState;
	}
};

const rootReducer = combineReducers({
	allPuppies: allPuppiesReducer,
	currentPuppy: singlePuppyReducer
});

export default rootReducer;
