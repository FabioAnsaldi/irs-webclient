import copyrightReducer from "../copyright/reducer";  

const INITIAL_STATE = {
    copyright: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_FOOTER/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /COPYRIGHT/.test(action.type):
            return { ...state, copyright: copyrightReducer(state && state.copyright, action) }
        default:
            return state
    }
}