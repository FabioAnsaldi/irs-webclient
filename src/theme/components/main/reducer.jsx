import routesReducer from "../routes/reducer";

const INITIAL_STATE = {
    routes: null,
    isLoaded: false,
    user: {
        isLogged: false
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_MAIN/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /SET_USER/.test(action.type):
            return { ...state, user: action.payload }
        case /ROUTES/.test(action.type):
            return { ...state, routes: routesReducer(state.routes, action) }
        default:
            return state
    }
}