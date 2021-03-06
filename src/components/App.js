import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import handleVideoSearch from '../actions/search.js';
import store from '../store/store.js';
// import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // this.store = store();

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    // handleVideoSearch('react tutorials')(store.dispatch);
    store.dispatch(handleVideoSearch('react tutorials'));
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }
  

  getYouTubeVideos(query) {
    // var options = {
    //   key: this.props.API_KEY,
    //   query: query
    // };
    console.log(this.props);
    this.props.searchYouTube({key:this.props.API_KEY, query: query}, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    // <Provider store={store}></Provider>

    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
              {/* // handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              // videos={this.state.videos}
           */}
          </div>
        </div>
      </div>
    );
  }
}
