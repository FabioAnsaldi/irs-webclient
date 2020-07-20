export function setDashboardPageStatus(value) {
    return {
        type: 'MAIN::ROUTES::PRIVATE_ROUTE::LAYOUT::SET_DASHBOARD_PAGE',
        payload: value
    }
}

export function setModalStatus(value) {
    return {
        type: 'MAIN::ROUTES::PRIVATE_ROUTE::LAYOUT::DASHBOARD_PAGE::SET_MODAL',
        payload: value
    }
}