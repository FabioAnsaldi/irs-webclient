const INITIAL_STATE = {
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /COPYRIGHT::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        default:
            return state
    }
}