import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';

import { setPublicRouteStatus } from './actions/publicRoute'

class PublicRoute extends Component {

    componentDidMount() {
        this.props.setPublicRouteStatus(true)
    }

    render() {
        const { component: Component, user, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={(props) =>
                    <Suspense fallback={()=>{return (null)}}>
                        <Component {...props} />
                    </Suspense>
                }
          />
        )
    }
}

const mapStateToProps = state => ({
    user: state.main && state.main.user,
    publicRoute: state.main.layout.publicRoute
})
const mapDispatchToProps = dispatch => bindActionCreators({ setPublicRouteStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)