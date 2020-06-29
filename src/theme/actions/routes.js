export function setRoutesStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::SET_ROUTES',
        payload: value
    }
}