import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => {
    // connect(mapStateToProps);
    // connect(mapDispatchToProps);
};

const mapStateToProps = (state) => {
    console.log('mstp', state);
    return ({
        currentVideo: state.currentVideo,
        videoList: state.videoList
    });
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
    };
}

//action dispacter is handleSearchChange(what we wrote);
//Search
///handleSearchChange calls Searchyoutube which is an api call to youtube servers.

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

// export default SearchContainer;
export default connect(mapStateToProps,mapDispatchToProps)(Search);
//does connect() return a function definition and then call SearchC as an input? -question