export function setPrivateRouteStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::SET_PRIVATE_ROUTE',
        payload: value
    }
}