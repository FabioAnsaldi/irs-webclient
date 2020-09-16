import copyrightReducer from "../copyright/reducer";  

const INITIAL_STATE = {
    isLoaded: false,
    copyright: null
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /FOOTER::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return { ...state, isLoaded: action.payload }
        case /COPYRIGHT::/.test(action.type):
            return { ...state, copyright: copyrightReducer(state && state.copyright, action) }
        default:
            return state
    }
}