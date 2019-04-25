import {
  SHOW_ERROR,
  REQUEST_POSTS,
  STORE_IMAGE,
  UPLOAD_IMAGE} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case  UPLOAD_IMAGE:
      return true

    case STORE_IMAGE:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
