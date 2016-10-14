
function puppyReducer(state = {allPuppies: []}, action) {
	switch (action.type) {
		case 'ADD_PUPPY':
			return state
		case 'LOAD_PUPPIES':
			return Object.assign({}, state, {allPuppies: action.allPuppies})
		default:
			return state
	}
}

export default puppyReducer;
