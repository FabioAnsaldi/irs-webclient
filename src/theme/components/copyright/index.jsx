import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setCopyrightStatus } from './actions'

class Copyright extends Component {

    componentDidMount() {
        this.props.setCopyrightStatus(true)
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
const mapDispatchToProps = dispatch => bindActionCreators({ setCopyrightStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Copyright)