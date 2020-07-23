export const setComponentLoaded = (COMPONENT, value) => {
    return {
        type: `${COMPONENT}::SET_COMPONENT_LOADED`,
        payload: value
    }
}

export const setUserData = (value) => {
    return {
        type: `${COMPONENT}::SET_USER_DATA`,
        payload: value
    }
}