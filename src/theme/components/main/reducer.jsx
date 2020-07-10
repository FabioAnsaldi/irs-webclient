import layoutReducer from "../layout/reducer";

const INITIAL_STATE = {
    routes: null,
    isLoaded: false,
    user: {
        isLogged: true
    }
}

export default (state = INITIAL_STATE, action) => {
    debugger
    switch (true) {
        case /SET_MAIN/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /SET_USER/.test(action.type):
            return { ...state, user: action.payload }
        case /ROUTES/.test(action.type):
            return { ...state, routes: layoutReducer(state.routes, action) }
        default:
            return state
    }
}