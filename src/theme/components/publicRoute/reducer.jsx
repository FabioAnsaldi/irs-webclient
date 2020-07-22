import loginReducer from "../../../pages/login/reducer";

const INITIAL_STATE = {
    loginPage: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PUBLIC_ROUTE::SET_COMPONENT_LOADED/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /LOGIN::/.test(action.type):
            return { ...state, loginPage: loginReducer(state && state.loginPage, action) }
        default:
            return state
    }
}