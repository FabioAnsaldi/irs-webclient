import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class PrivateRoute extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }
    
    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {

        const { component: Component, state, user, ...rest } = this.props

        return (
            <Route
                {...rest}
                render={(props) =>
                    user && user.isLogged ? (
                        <Suspense fallback={()=>{return (null)}}>
                            <Component {...props} />
                        </Suspense>
                    ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
                }
          />
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'privateRoute'), user: getStateFrom(state, 'user') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)