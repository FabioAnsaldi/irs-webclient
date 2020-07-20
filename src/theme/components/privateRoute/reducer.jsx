import layoutReducer from "../layout/reducer";

const INITIAL_STATE = {
    layout: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_PRIVATE_ROUTE/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /LAYOUT/.test(action.type):
            return { ...state, layout: layoutReducer(state && state.layout, action) }
        default:
            return state
    }
}