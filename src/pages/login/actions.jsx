export function setLoginPageStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PUBLIC_ROUTE::SET_LOGIN_PAGE',
        payload: value
    }
}