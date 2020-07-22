import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../../components/routes'
import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Main extends Component {

    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)