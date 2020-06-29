import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { setPrivateRouteStatus } from './actions/privateRoute'

class PrivateRoute extends Component {

    componentDidMount() {
        this.props.setPrivateRouteStatus(true)
    }

    render() {
        const { component: Component, user, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={(props) =>
                    user.isLogged ? (
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

const mapStateToProps = state => ({
    user: state.main && state.main.user,
    privateRoute: state.main.layout.privateRoute
})
const mapDispatchToProps = dispatch => bindActionCreators({ setPrivateRouteStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)