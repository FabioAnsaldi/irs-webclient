export function setFooterStatus(value) {
    return {
        type: 'STATE::MAIN::LAYOUT::PRIVATE_ROUTE::ROUTES::SET_FOOTER',
        payload: value
    }
}