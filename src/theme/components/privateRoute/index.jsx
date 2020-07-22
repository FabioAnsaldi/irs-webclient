import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class PrivateRoute extends Component {

    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
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
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)