export function setLoginPageStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PUBLIC_ROUTE::SET_LOGIN_PAGE',
        payload: value
    }
}

export function setLoginStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PUBLIC_ROUTE::SET_LOGIN',
        payload: value
    }
}

export function getUserLoginStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PUBLIC_ROUTE::GET_USER_LOGIN',
        payload: value
    }
}