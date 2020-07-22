import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { setComponentLoaded } from './actions'
import { getParentComponent } from '../../helpers/helpers'

class PublicRoute extends Component {

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
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)