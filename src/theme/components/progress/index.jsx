import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pace from '../../assets/js/pace/pace'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Progress extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }
    
    componentDidMount() {
        pace.start();
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        const { state } = this.props

        return (null)
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'progress') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)