import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {}

const menuItem = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MENUITEM::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        default:
            return state
    }
}

export default menuItem