import copyrightReducer from "../../theme/components/copyright/reducer";
import { getStateObject } from '../../theme/helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false,
    copyright: null
}

const login = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /LOGIN::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /COPYRIGHT(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, copyrightReducer)
        default:
            return state
    }
}

export default login