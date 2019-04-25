import {STORE_IMAGE} from '../actions'
function images (state = [], action) {
  switch (action.type) {
    case STORE_IMAGE:
      return [...state,action.image]
    default:
      return state
  }
  
}

export default images
