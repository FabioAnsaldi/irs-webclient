export function setMainStatus(value) {
    return {
        type: 'SET_MAIN',
        payload: value
    }
}

export function setUserStatus(value) {
    return {
        type: 'SET_USER',
        payload: value
    }
}