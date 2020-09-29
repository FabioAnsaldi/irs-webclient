import layoutReducer from "../layout/reducer";
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    layout: null
}

const privateRoute = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /PRIVATEROUTE::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /LAYOUT(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, layoutReducer)
        default:
            return state
    }
}

export default privateRoute