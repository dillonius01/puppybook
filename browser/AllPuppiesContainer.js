import React from 'react';
import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

import { fetchPuppies } from './action-creators';


const mapStateToProps = ({ allPuppies }) => ({
	allPuppies
})

const mapDispatchToProps = dispatch => ({
	loadAllPuppies: () => dispatch(fetchPuppies())
})

const AllPuppiesContainer = connect(mapStateToProps, mapDispatchToProps)(AllPuppies);

export default AllPuppiesContainer;

