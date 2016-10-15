import { combineReducers } from 'redux'; 

const currentPuppyReducer = (state = {id: -1, name: '', image: ''}, action) => {
	switch (action.type) {
		case 'LOAD_PUPPY':
			return action.currentPuppy;
		case 'LEAVE_PUP':
			return {};
		default:
			return state
	}
}

const allPuppiesReduer = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_PUPPIES':
			return action.allPuppies;
		default:
			return state; 
	}
}

const rootReducer = combineReducers({
	currentPuppy: currentPuppyReducer,
	allPuppies: allPuppiesReduer
}) 

export default rootReducer;


