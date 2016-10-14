// Imports
import hardCodedPuppies from './store';

// Action Types
const LOAD_PUPPIES = 'LOAD_PUPPIES';

// Action Creators
export const loadPuppies = (allPuppies) => {
	return {
		type: LOAD_PUPPIES,
		allPuppies
	}
}

export const fetchPuppy = (id) => {
	return (dispatch) => {
		fetch(`/api/puppies/${id}`)
			.then(puppy => puppy.json())
			.then(puppy => dispatch(loadPuppies(puppy)))
			.catch(err => {
				console.log(err)
			})
	}
}

export const fetchPuppies = () => {
	return (dispatch) => {
		fetch('/api/puppies')
			.then(puppies => puppies.json())
			.then(puppies => dispatch(loadPuppies(puppies)))
			.catch(err => {
				console.log(err)
			})
	}
}
