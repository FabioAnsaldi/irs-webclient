import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {}

const header = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /HEADER::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        default:
            return state
    }
}

export default header