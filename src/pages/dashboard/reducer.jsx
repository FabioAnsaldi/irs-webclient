const INITIAL_STATE = {
    isOpen: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_DASHBOARD_PAGE/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case 'SET_MODAL':
            return { ...state, isOpen: action.payload }
        default:
            return state
    }
}