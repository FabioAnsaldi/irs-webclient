export function setNavigationStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::ROUTES::SET_NAVIGATION',
        payload: value
    }
}