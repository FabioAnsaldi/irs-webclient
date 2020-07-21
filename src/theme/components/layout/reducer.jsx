import progressReducer from "../progress/reducer";
import navigationReducer from "../navigation/reducer";
import topHeaderReducer from "../topHeader/reducer";
import headerReducer from "../header/reducer";
import footerReducer from "../footer/reducer";
import dashboardReducer from "../../../pages/dashboard/reducer";

const INITIAL_STATE = {
    progress: null,
    navigation: null,
    topHeader: null,
    header: null,
    footer: null,
    isLoaded: false
}

export default (state = INITIAL_STATE, action) => {
    switch (true) {
        case /SET_LAYOUT/.test(action.type):
            return { ...state, isLoaded: action.payload }
        case /PROGRESS/.test(action.type):
            return { ...state, progress: progressReducer(state && state.progress, action) }
        case /NAVIGATION/.test(action.type):
            return { ...state, navigation: navigationReducer(state && state.navigation, action) }
        case /TOP_HEADER/.test(action.type):
            return { ...state, topHeader: topHeaderReducer(state && state.topHeader, action) }
        case /HEADER/.test(action.type):
            return { ...state, header: headerReducer(state && state.header, action) }
        case /FOOTER/.test(action.type):
            return { ...state, footer: footerReducer(state && state.footer, action) }
        case /DASHBOARD_PAGE/.test(action.type):
            return { ...state, dashboard: dashboardReducer(state && state.dashboard, action) }
        default:
            return state
    }
}