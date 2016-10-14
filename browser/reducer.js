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

export default combineReducers({
	currentPuppyReducer,
	allPuppiesReduer
}) 




// function puppyReducer(state = {allPuppies: [], currentPuppy: {id: -1, name: '', image: ''}}, action) {
// 	switch (action.type) {
// 		case 'LOAD_PUPPY':
// 			return Object.assign({}, state, {currentPuppy: action.currentPuppy})
// 		case 'LOAD_PUPPIES':
// 			return Object.assign({}, state, {allPuppies: action.allPuppies})
// 		case 'LEAVE_PUP':
// 			return Object.assign({}, state, {currentPuppy: {}})
// 		default:
// 			return state
// 	}
// }
