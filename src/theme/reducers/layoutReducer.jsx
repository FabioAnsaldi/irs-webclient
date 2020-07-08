import privateRoute from "./privateRouteReducer";
import publicRoute from "./publicRouteReducer";

const INITIAL_STATE = {
    privateRoute: null,
    publicRoute: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_LAYOUT/.test(action.type):
            return {
                ...state, isLoaded: action.payload
            }
        case /PRIVATE_ROUTE/.test(action.type):
            return {
                ...state, privateRoute: privateRoute(state && state.privateRoute, action)
            }
        case /PUBLIC_ROUTE/.test(action.type):
            return {
                ...state, publicRoute: publicRoute(state && state.publicRoute, action)
            }
        default:
            return state
    }
}