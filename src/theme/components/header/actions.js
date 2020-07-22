export function setComponentLoaded(COMPONENT, value) {
    return {
        type: `${COMPONENT}::SET_COMPONENT_LOADED`,
        payload: value
    }
}