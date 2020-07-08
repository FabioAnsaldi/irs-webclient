import routesReducer from "./routesReducer";

const INITIAL_STATE = {
    routes: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_PRIVATE_ROUTE/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /ROUTES/.test(action.type):
            return {
                ...state, routes: routesReducer(state && state.routes, action)
            }
        default:
            return state
    }
}