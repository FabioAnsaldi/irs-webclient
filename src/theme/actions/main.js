export function setMainStatus(value) {
    return {
        type: 'STATE::SET_MAIN',
        payload: value
    }
}