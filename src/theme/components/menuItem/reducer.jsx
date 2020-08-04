import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MENUITEM::SET_COMPONENT_LOADED/.test(action.type):
            return getStateObject(action, state)
        default:
            return state
    }
}