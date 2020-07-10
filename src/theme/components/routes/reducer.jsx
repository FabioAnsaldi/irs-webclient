import privateRoute from "../privateRoute/reducer";
import publicRoute from "../publicRoute/reducer";

const INITIAL_STATE = {
    privateRoute: null,
    publicRoute: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_ROUTES/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /PRIVATE_ROUTE/.test(action.type):
            return { ...state, privateRoute: privateRoute(state && state.privateRoute, action) }
        case /PUBLIC_ROUTE/.test(action.type):
            return { ...state, publicRoute: publicRoute(state && state.publicRoute, action) }
        default:
            return state
    }
}