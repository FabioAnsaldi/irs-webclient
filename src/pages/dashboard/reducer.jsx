import { getStateObject } from '../../theme/helpers/helpers'

const INITIAL_STATE = {
    isModalOpen: false
}

const dashboard =  (state = INITIAL_STATE, action) => {
    switch (true) {
        case /DASHBOARD::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /DASHBOARD::SET_MODAL_STATUS/.test(action.type):
            return { ...state, isModalOpen: action.payload }
        default:
            return state
    }
}

export default dashboard