import {
    CHANGE_VIEW} from '../actions'
  
  const changeView = (state = false, action) => {
    switch (action.type) {
      case  CHANGE_VIEW:
        return true
      default:
        return state
    }
  }
  
  export default changeView
  