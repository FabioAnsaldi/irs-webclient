import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFooterStatus } from './actions'
import Copyright from '../copyright'

class Footer extends Component {

    componentDidMount() {
        this.props.setFooterStatus(true)
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
const mapDispatchToProps = dispatch => bindActionCreators({ setFooterStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)