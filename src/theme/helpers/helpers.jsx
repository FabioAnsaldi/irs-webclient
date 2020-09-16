import { isNumber } from "lodash"

export const correctHeight = () => {
    
    var pageWrapper = $('#page-wrapper');
    var navbarHeight = $('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();

    if (navbarHeight > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }

    if (navbarHeight <= wrapperHeigh) {
        if (navbarHeight < $(window).height()) {
            pageWrapper.css("min-height", $(window).height() + "px");
        } else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }

    if ($('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeight + "px");
        } else {
            pageWrapper.css("min-height", $(window).height() - 60 + "px");
        }
    }
}
    
export const detectBody = () => {

    if ($(document).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
}

export const smoothlyMenu = () => {

    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide()
        // For smoothly turn on menu
        setTimeout( () => {
            $('#side-menu').fadeIn(400)
        }, 200)
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout( () => {
            $('#side-menu').fadeIn(400)
        }, 100)
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style')
    }
}

export const getParentComponent = (context) => {

    const elementType = context.elementType
    const pendingProps = context.pendingProps
    const components = process.env.COMPONENTS.map(name => name.toLowerCase())

    if (!elementType) {
        return ""
    }

    let name = elementType.name && context.type && (elementType.name === context.type.name) ? context.type.name.toUpperCase() : ""
    let parent = ""

    if (elementType.name && !components.includes(elementType.name.toLowerCase())) {
        name = ""
    }

    if (context.return) {
        parent = getParentComponent(context.return)
    }

    let number = pendingProps && pendingProps.componentName ? `[${pendingProps.componentName}]` : ""

    if (name !== "" && parent !== "") {
        name = `${parent}::${name}${number}`
    } else {
        name += parent
    }
    
    return name
}

export const getStateFrom = (globalState, componentName) => {

    if (!componentName || typeof globalState !== 'object' || globalState === null) {
        return null
    }

    let state = globalState[componentName]

    if (state) {
        return state
    }

    Object.keys(globalState).forEach((key, i) => {
        let appo = getStateFrom(globalState[key], componentName)
        
        if (appo) {
            state = appo
        }
    })
    
    return state
}

export const getStateObject = (action, state) => {

    const arrayOfComponents = /.*(?=((?<=\S)\[([^)]+)\]+)).*/
    
    if (arrayOfComponents.test(action.type)) {
        let componentName = arrayOfComponents.exec(action.type)[2]

        if (state && isNumber(state.length)) {
            state[componentName] = { isLoaded: action.payload }
        } else {
            state = []
            state[componentName] = { isLoaded: action.payload }
        }
        
        return state
    }

    return { ...state, isLoaded: action.payload }
}
