import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({currentVideo, videoList});
///combinereducer returns a function definition

export default rootReducer;
