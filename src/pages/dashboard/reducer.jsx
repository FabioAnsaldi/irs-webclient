const INITIAL_STATE = {
    isModalOpen: false,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /DASHBOARD::SET_COMPONENT_LOADED/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /DASHBOARD::SET_MODAL_STATUS/.test(action.type):
            return { ...state, isModalOpen: action.payload }
        default:
            return state
    }
}