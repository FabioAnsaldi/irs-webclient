export function setLoginStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::SET_LOGIN',
        payload: value
    }
}

export function getUserLoginStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::GET_USER_LOGIN',
        payload: value
    }
}