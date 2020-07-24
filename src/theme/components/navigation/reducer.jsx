import menuTreeReducer from "../../../theme/components/menuTree/reducer"

const INITIAL_STATE = {
    menuTree: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /NAVIGATION::SET_COMPONENT_LOADED/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /MENUTREE::/.test(action.type):
            return { ...state, menuTree: menuTreeReducer(state && state.menuTree, action) }
        default:
            return state
    }
}