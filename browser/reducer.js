import { RENDER_PUPPIES } from './action-creators'

const rootReducer = (previousState = { allPuppies: [] }, action) => {
	switch (action.type) {
		case RENDER_PUPPIES:
			return Object.assign({}, previousState, { allPuppies: action.allPuppies })
		default:
			return previousState
	}

}

export default rootReducer;
