export function setTopHeaderStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::ROUTES::SET_TOP_HEADER',
        payload: value
    }
}