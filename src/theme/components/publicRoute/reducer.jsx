import loginReducer from "../../../pages/login/reducer";
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false,
    login: null
}

const publicRoute = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PUBLICROUTE::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /LOGIN(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, loginReducer)
        default:
            return state
    }
}

export default publicRoute