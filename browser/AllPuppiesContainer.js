import React from 'react';
import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { fetchPuppies } from './action-creators';

const mapStateToProps = ({ allPuppies }, ownProps) => ({
	allPuppies
})

export default connect(mapStateToProps)(AllPuppies);
