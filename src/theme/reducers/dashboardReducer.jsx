const INITIAL_STATE = {
    isOpen: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MODAL':
            return { ...state, isOpen: action.payload }
        default:
            return state
    }
}