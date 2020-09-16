import routesReducer from "../routes/reducer";

const INITIAL_STATE = {
    isLoaded: false,
    routes: null,
    user: {
        isLogged: true
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MAIN::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        case /MAIN::SET_USER_DATA/.test(action.type):
            return { ...state, user: action.payload }
        case /ROUTES::/.test(action.type):
            return { ...state, routes: routesReducer(state && state.routes, action) }
        default:
            return state
    }
}