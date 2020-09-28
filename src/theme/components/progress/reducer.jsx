import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false
}

const progress = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PROGRESS::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        default:
            return state
    }
}

export default progress