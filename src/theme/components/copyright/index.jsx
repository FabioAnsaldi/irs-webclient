import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Copyright extends Component {

    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        return (
            <div>
                <strong>Copyright</strong> Best Vision Solutions &amp; Services &copy; 2020
            </div>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Copyright)