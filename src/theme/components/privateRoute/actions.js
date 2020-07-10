export function setPrivateRouteStatus(value) {
    return {
        type: 'MAIN::ROUTES::SET_PRIVATE_ROUTE',
        payload: value
    }
}