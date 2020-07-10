const INITIAL_STATE = {
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_TOP_HEADER/.test(action.type):
            return { ...state, isLoaded: action.payload }
        default:
            return state
    }
}