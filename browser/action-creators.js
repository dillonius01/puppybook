// Imports
import hardCodedPuppies from './store';

// Action Types
const ADD_PUPPY = 'ADD_PUPPY';
const LOAD_PUPPIES = 'LOAD_PUPPIES';

// Action Creators
export const loadPuppies = () => {
	return {
		type: LOAD_PUPPIES,
		allPuppies: hardCodedPuppies
	}
}