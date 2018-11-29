import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    q: q,
    max: 5,
    key: YOUTUBE_API_KEY
  };
  return ( () => {
    searchYouTube(options, () => {});
  });
};

export default handleVideoSearch;
