import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch } from 'react-router-dom';

import PublicRoute from '../publicRoute'
import PrivateRoute from '../privateRoute'
import Layout from '../layout'
import Login from '../../../pages/login'

import { setRoutesStatus } from './actions'

class Routes extends Component {

    componentDidMount() {
        this.props.setRoutesStatus(true)
    }

    render() {

        const { router, params, location, routes } = this.props;
        
        return (
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="*" component={Layout} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setRoutesStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)