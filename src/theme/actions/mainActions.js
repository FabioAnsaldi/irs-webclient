export function setMainStatus(value) {
    return {
        type: 'STATE::SET_MAIN',
        payload: value
    }
}

export function setUserStatus(value) {
    return {
        type: 'STATE::SET_USER',
        payload: value
    }
}