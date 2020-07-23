export const setComponentLoaded = (COMPONENT, value) => {
    return {
        type: `${COMPONENT}::SET_COMPONENT_LOADED`,
        payload: value
    }
}

export const setModalStatus = (COMPONENT, value) => {
    return {
        type: `${COMPONENT}::SET_MODAL_STATUS`,
        payload: value
    }
}