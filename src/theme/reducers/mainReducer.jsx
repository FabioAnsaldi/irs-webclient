import layoutReducer from "./layoutReducer";

const INITIAL_STATE = {
    layout: {
        privateRoute: null,
        publicRoute: null,
        isLoaded: false
    },
    isLoaded: false,
    user: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_MAIN/.test(action.type):
            return {
                ...state, isLoaded: action.payload
            }
        case /LAYOUT/.test(action.type):
            return {
                ...state, layout: layoutReducer(state.layout, action)
            }
        default:
            return state
    }
}