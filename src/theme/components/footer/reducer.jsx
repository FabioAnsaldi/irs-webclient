import copyrightReducer from "../copyright/reducer";
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false,
    copyright: null
}

const footer = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /FOOTER::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /COPYRIGHT(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, copyrightReducer)
        default:
            return state
    }
}

export default footer