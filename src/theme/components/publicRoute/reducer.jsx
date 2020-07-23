import loginReducer from "../../../pages/login/reducer";

const INITIAL_STATE = {
    login: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PUBLIC_ROUTE::SET_COMPONENT_LOADED/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /LOGIN::/.test(action.type):
            return { ...state, login: loginReducer(state && state.login, action) }
        default:
            return state
    }
}