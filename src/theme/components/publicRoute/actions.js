export function setPublicRouteStatus(value) {
    return {
        type: 'MAIN::ROUTES::SET_PUBLIC_ROUTE',
        payload: value
    }
}