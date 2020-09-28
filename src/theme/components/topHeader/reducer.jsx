import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false
}

const topHeader = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /TOPHEADER::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        default:
            return state
    }
}

export default topHeader