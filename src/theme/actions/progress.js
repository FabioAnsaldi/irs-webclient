export function setProgressStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::ROUTES::SET_PROGRESS',
        payload: value
    }
}