import { getStateObject } from '../../helpers/helpers'
import menuItemReducer from "../../../theme/components/menuItem/reducer"

const INITIAL_STATE = {
    menuItem: null
}

const menuTree = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MENUTREE::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /MENUITEM(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, menuItemReducer)
        default:
            return state
    }
}

export default menuTree