import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { setPrivateRouteStatus } from './actions/privateRouteActions'

class PrivateRoute extends Component {

    componentDidMount() {
        this.props.setPrivateRouteStatus(true)
    }

    render() {
        const { component: Component, state, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={(props) =>
                    state.main.user.isLogged ? (
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

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setPrivateRouteStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)