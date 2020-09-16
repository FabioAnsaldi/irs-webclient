import privateRoute from "../privateRoute/reducer";
import publicRoute from "../publicRoute/reducer";

const INITIAL_STATE = {
    isLoaded: false,
    privateRoute: null,
    publicRoute: null
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /ROUTES::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        case /PRIVATEROUTE::/.test(action.type):
            return { ...state, privateRoute: privateRoute(state && state.privateRoute, action) }
        case /PUBLICROUTE::/.test(action.type):
            return { ...state, publicRoute: publicRoute(state && state.publicRoute, action) }
        default:
            return state
    }
}