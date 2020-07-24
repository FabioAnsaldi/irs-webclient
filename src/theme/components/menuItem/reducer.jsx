const INITIAL_STATE = {
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /MENUITEM::SET_COMPONENT_LOADED/.test(action.type):
            return { ...state, isLoaded: action.payload }
        default:
            return state
    }
}