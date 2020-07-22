import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Copyright from '../copyright'
import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Footer extends Component {

    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        return (
            <div className="footer">
                <div className="pull-right">
                    10GB of <strong>250GB</strong> Free.
                </div>
                <div>
                    <Copyright />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)