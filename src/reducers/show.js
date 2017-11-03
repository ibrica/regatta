import * as CONSTANTS from '../constants'

const show = (state = CONSTANTS.SHOW_HOME, action) => {
    switch (action.type) {
        case CONSTANTS.SHOW_HOME:
            return CONSTANTS.SHOW_HOME
        case CONSTANTS.SHOW_DETAIL:
            return CONSTANTS.SHOW_DETAIL
        default:
            return state
    }
}

export default show