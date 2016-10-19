// Action Types
export const RENDER_PUPPIES = 'RENDER_PUPPIES';
export const RENDER_SINGLE_PUPPY = 'RENDER_SINGLE_PUPPY';

// Action Creators
const renderPuppies = (allPuppies) => ({
	type: RENDER_PUPPIES,
	allPuppies
})

const renderSinglePuppy = (puppy) => ({
	type: RENDER_SINGLE_PUPPY,
	puppy
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

export const fetchSinglePuppy = id => {
	return dispatch => {
		fetch(`/api/puppies/${id}`)
			.then(puppy => puppy.json())
			.then(puppy => dispatch(renderSinglePuppy(puppy)))
			.catch(err => console.error(err))
	}
}