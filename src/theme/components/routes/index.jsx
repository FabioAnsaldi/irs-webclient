import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch } from 'react-router-dom';

import PublicRoute from '../publicRoute'
import PrivateRoute from '../privateRoute'
import Layout from '../layout'
import Login from '../../../pages/login'

import { setComponentLoaded } from './actions'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'

class Routes extends Component {

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
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="*" component={Layout} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'routes') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)