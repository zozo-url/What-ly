import {
    SHOW_ERROR,
    STORE_IMAGE
} from '../actions'

function imagePage(state = false, action) {
    switch (action.type) {
        case STORE_IMAGE:
            return true
        case SHOW_ERROR:
            return false
        default:
            return state
    }

}

export default imagePage
