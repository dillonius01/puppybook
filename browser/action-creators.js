// Imports
import hardCodedPuppies from './store';

// Action Types
const LOAD_PUPPIES = 'LOAD_PUPPIES';
const LOAD_PUPPY = 'LOAD_PUPPY';
const LEAVE_PUP = 'LEAVE_PUP';

// SYNC Action Creators
export const loadPuppies = (allPuppies) => {
	return {
		type: LOAD_PUPPIES,
		allPuppies
	}
}

export const loadPuppy = (currentPuppy) => {
	return {
		type: LOAD_PUPPY,
		currentPuppy
	}
}


export const leavePup = () => {
	return {
		type: LEAVE_PUP
	}
}


// ASYNC Action Creators
export const fetchPuppy = (id) => {
	return (dispatch) => {
		fetch(`/api/puppies/${id}`)
			.then(puppy => puppy.json())
			.then(puppy => dispatch(loadPuppy(puppy)))
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

