import progressReducer from "../progress/reducer"
import navigationReducer from "../navigation/reducer"
import topHeaderReducer from "../topHeader/reducer"
import headerReducer from "../header/reducer"
import footerReducer from "../footer/reducer"
import dashboardReducer from "../../../pages/dashboard/reducer"
import { getStateObject } from '../../helpers/helpers'

const INITIAL_STATE = {
    isLoaded: false,
    progress: null,
    navigation: null,
    topHeader: null,
    header: null,
    footer: null,
    dashboard: null
}

const layout = (state = INITIAL_STATE, action) => {
    switch (true) {
        case /LAYOUT::SET_COMPONENT_LOADED/.test(action.type.replace(/\[.*?\]/g, '')):
            return getStateObject(action, state)
        case /PROGRESS(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, progressReducer)
        case /NAVIGATION(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, navigationReducer)
        case /TOPHEADER(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, topHeaderReducer)
        case /HEADER(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, headerReducer)
        case /FOOTER(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, footerReducer)
        case /DASHBOARD(\[.*?\])?::/.test(action.type):
            return getStateObject(action, state, dashboardReducer)
        default:
            return state
    }
}

export default layout