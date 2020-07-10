import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { setPublicRouteStatus } from './actions'

class PublicRoute extends Component {

    componentDidMount() {
        this.props.setPublicRouteStatus(true)
    }

    render() {
        const { component: Component, state, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={(props) =>
                    state.main.user.isLogged ? (
                        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                    ) : (
                        <Suspense fallback={()=>{return (null)}}>
                            <Component {...props} />
                        </Suspense>
                    )
                }
          />
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setPublicRouteStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)