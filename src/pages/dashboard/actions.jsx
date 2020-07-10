export function setDashboardPageStatus(value) {
    return {
        type: 'MAIN::ROUTES::PRIVATE_ROUTE::LAYOUT::SET_LOGIN_PAGE',
        payload: value
    }
}

export function setModalStatus(value) {
    return {
        type: 'SET_MODAL',
        payload: value
    }
}