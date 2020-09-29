import privateRouteReducer from "../privateRoute/reducer";
import publicRouteReducer from "../publicRoute/reducer";
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    privateRoute: null,
    publicRoute: null
}

const routes = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /ROUTES::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /PRIVATEROUTE(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, privateRouteReducer)
        case /PUBLICROUTE(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, publicRouteReducer)
        default:
            return state
    }
}

export default routes