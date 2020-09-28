import { getStateObject } from '../../helpers/helpers'
import menuTreeReducer from "../../../theme/components/menuTree/reducer"

const INITIAL_STATE = {
    isLoaded: false,
    menuTree: null
}

const navigation = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /NAVIGATION::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        case /MENUTREE(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, menuTreeReducer)
        default:
            return state
    }
}

export default navigation