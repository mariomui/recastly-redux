import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    q: q,
    key: YOUTUBE_API_KEY
  };
  return ( (dispatch) => {
    searchYouTube(options, (options) => {
      dispatch(changeVideo(options[0]));
      dispatch(changeVideoList(options));
    });
  });
};

export default handleVideoSearch;
