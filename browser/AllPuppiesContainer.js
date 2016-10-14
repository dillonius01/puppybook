import React from 'react';
import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppies } from './action-creators'; 

const mapStateToProps = ({ allPuppies }, ownProps) => ({
	allPuppies
})

const mapDispatchToProps = dispatch => ({
	getPuppies: () => dispatch(loadPuppies())
})


export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);