import React from 'react';
import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { fetchPuppy } from './action-creators';

const mapStateToProps = ({ currentPuppy }, ownProps) => ({
	currentPuppy
})

const mapDispatchToProps = (dispatch) => ({
	renderSinglePuppy: (id) => dispatch(fetchPuppy(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePuppy);
