import {
    CHANGE_VIEW} from '../actions'
  
  const wikiSuggestion = (state = {name:'', info:''}, action) => {
    switch (action.type) {
      case  CHANGE_VIEW:
        return action.suggestion
      default:
        return state
    }
  }
  
  export default wikiSuggestion
  