import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = (state) => {
    return ({
        video: state.videos,
        videoList: state.videoList
    });
}
const mapDispatchToProps = (dispatch) => {
    // console.log('current state: ', store.getState());
    // console.log('ownProps', ownProps);
    // var currentState = store.getState();
    return {
        handleVideoListEntryTitleClick: (video) => dispatch(VideoPlayer(video)),
        // videos: (videos) => store.videoList
        // videos: currentState.videoList
    };
}

// export default SearchContainer;
export default connect(mapStateToProps,mapDispatchToProps)(VideoPlayerContainer);
