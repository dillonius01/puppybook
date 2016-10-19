import React from 'react';
import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = ({ currentPuppy }) => ({
	currentPuppy
});



const SinglePuppyContainer = connect(mapStateToProps)(SinglePuppy);

export default SinglePuppyContainer;