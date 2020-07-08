import layoutReducer from "./layoutReducer";

const INITIAL_STATE = {
    layout: null,
    isLoaded: false,
    user: {
        isLogged: false
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_MAIN/.test(action.type):
            return {
                ...state, isLoaded: action.payload
            }
        case /SET_USER/.test(action.type):
            return {
                ...state, user: action.payload
            }
        case /LAYOUT/.test(action.type):
            return {
                ...state, layout: layoutReducer(state.layout, action)
            }
        default:
            return state
    }
}