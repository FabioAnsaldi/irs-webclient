const INITIAL_STATE = {
    copyright: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_FOOTER/.test(action.type):
            return { ...state, isLoaded: action.payload }
        default:
            return state
    }
}