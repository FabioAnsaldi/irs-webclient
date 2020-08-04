import { getStateObject } from '../../helpers/helpers'
import menuItemReducer from "../../../theme/components/menuItem/reducer"

const INITIAL_STATE = {
    menuItem: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MENUTREE::SET_COMPONENT_LOADED/.test(action.type):
            return getStateObject(action, state)
        case /MENUITEM::/.test(action.type):
            return { ...state, menuItem: menuItemReducer(state && state.menuTree, action) }
        default:
            return state
    }
}