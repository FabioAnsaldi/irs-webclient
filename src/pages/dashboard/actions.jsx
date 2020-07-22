export function setComponentLoaded(COMPONENT, value) {
    return {
        type: `${COMPONENT}::SET_COMPONENT_LOADED`,
        payload: value
    }
}

export function setModalStatus(COMPONENT, value) {
    return {
        type: `${COMPONENT}::SET_MODAL_STATUS`,
        payload: value
    }
}