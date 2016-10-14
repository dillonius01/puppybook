
function puppyReducer(state = {allPuppies: []}, action) {
	switch (action.type) {
		case 'LOAD_PUPPY':
			return Object.assign({}, state, {allPuppies: action.allPuppies})
		case 'LOAD_PUPPIES':
			return Object.assign({}, state, {allPuppies: action.allPuppies})
		default:
			return state
	}
}

export default puppyReducer;
