import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from 'react-router-dom';

import { setComponentLoaded } from './actions'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'

class PublicRoute extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }
    
    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {

        const { component: Component, state, user, ...rest } = this.props

        return (
            <Route
                {...rest}
                render={(props) =>
                    user && user.isLogged ? (
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

const mapStateToProps = state => ({ state: getStateFrom(state, 'publicRoute'), user: getStateFrom(state, 'user') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)