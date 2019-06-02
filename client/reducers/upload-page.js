import {
    SHOW_ERROR,
    UPLOAD_IMAGE
} from '../actions'

function uploadPage(state = true, action) {
    switch (action.type) {
        case UPLOAD_IMAGE:
            return false
        case SHOW_ERROR:
            return false
        default:
            return state
    }

}

export default uploadPage
