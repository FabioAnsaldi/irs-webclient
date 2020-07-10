import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setProgressStatus } from './actions'
import pace from '../../assets/js/pace/pace'

class Progress extends Component {

    componentDidMount() {
        pace.start();
        this.props.setProgressStatus(true)
    }

    render() {
        return (null)
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setProgressStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)