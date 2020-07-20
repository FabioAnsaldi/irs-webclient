const INITIAL_STATE = {
    isModalOpen: false,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_DASHBOARD_PAGE/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /SET_MODAL/.test(action.type):
            return { ...state, isModalOpen: action.payload }
        default:
            return state
    }
}