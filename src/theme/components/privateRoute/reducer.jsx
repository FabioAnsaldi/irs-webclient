import layoutReducer from "../layout/reducer";

const INITIAL_STATE = {
    isLoaded: false,
    layout: null
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PRIVATEROUTE::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        case /LAYOUT::/.test(action.type):
            return { ...state, layout: layoutReducer(state && state.layout, action) }
        default:
            return state
    }
}