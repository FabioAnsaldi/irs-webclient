export function setPublicRouteStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::SET_PUBLIC_ROUTE',
        payload: value
    }
}