import {STORE_INFO} from '../actions'
function suggestions (state = [{name:'',info:''}], action) {
    console.log(action.suggestions);
  switch (action.type) {
    case STORE_INFO:
      return [...state,action.suggestionInfo]
    default:
      return state
  }
}
export default suggestions
