import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch } from 'react-router-dom';

import PublicRoute from './publicRoute'
import PrivateRoute from './privateRoute'
import Routes from './routes'
import Login from '../pages/login'

import { setLayoutStatus } from './actions/layoutActions'

class Layout extends Component {

    componentDidMount() {
        this.props.setLayoutStatus(true)
    }

    render() {
        return (
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="*" component={Routes} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setLayoutStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)