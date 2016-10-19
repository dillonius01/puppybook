// Action Types
export const RENDER_PUPPIES = 'RENDER_PUPPIES';

// Action Creators
const renderPuppies = (allPuppies) => ({
	type: RENDER_PUPPIES,
	allPuppies
})

// Thunk Creators
export const fetchPuppies = () => {
	return dispatch => {
		fetch('/api/puppies')
			.then(puppies => puppies.json())
			.then(puppies => dispatch(renderPuppies(puppies)))
			.catch(err => console.error(err))
	}
}