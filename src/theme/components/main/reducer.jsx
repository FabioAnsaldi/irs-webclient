import routesReducer from "../routes/reducer";
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    routes: null,
    user: {
        isLogged: true
    }
}

const main = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MAIN::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /MAIN::SET_USER_DATA/.test(action.type):
            return { ...state, user: action.payload }
        case /ROUTES(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, routesReducer)
        default:
            return state
    }
}

export default main