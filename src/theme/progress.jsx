import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setProgressStatus } from './actions/progress'
import pace from '../theme/assets/js/pace/pace'

class Progress extends Component {

    componentDidMount() {
        pace.start();
        this.props.setProgressStatus(true)
    }

    render() {
        return (null)
    }
}

const mapStateToProps = state => ({ progress: state.main.layout && state.main.layout.progress })
const mapDispatchToProps = dispatch => bindActionCreators({ setProgressStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)