import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pace from '../../assets/js/pace/pace'
import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Progress extends Component {

    componentDidMount() {
        pace.start();
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        return (null)
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)