import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
//
import store from '../store/store.js';
var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
    console.log('vlcmstp',state);
    return {
        // currentVideo: state.currentVideo,
        videos: state.videoList,
    };
}
const mapDispatchToProps = (dispatch) => {
    console.log('current state: ', store.getState());
    // console.log('ownProps', ownProps);
    var currentState = store.getState();
    return {
        handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),

        // videos: (videos) => store.videoList
        // videos: currentState.videoList
    };
}

// export default SearchContainer;
export default connect(mapStateToProps,mapDispatchToProps)(VideoList);
//does connect() return a function definition and then call SearchC as an input? -question
// export default VideoListContainer;
