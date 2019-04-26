import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import images from './images'
import uploadPage from './upload-page'
import imagePage from './image-page'
import suggestions from './suggestions'
import changeView from './change-view'
export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  images,
  uploadPage,
  imagePage,
  suggestions,
  changeView

})
