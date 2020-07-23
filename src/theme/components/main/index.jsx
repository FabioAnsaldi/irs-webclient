import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../../components/routes'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Main extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {

        const { state } = this.props
        
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'main') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)