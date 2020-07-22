export function setComponentLoaded(COMPONENT, value) {
    return {
        type: `${COMPONENT}::SET_COMPONENT_LOADED`,
        payload: value
    }
}

export function setUserData(value) {
    return {
        type: `${COMPONENT}::SET_USER_DATA`,
        payload: value
    }
}