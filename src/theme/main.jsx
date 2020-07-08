import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import Layout from './layout'

import { setMainStatus } from './actions/mainActions'

class Main extends Component {

    componentDidMount() {
        this.props.setMainStatus(true)
    }

    render() {
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setMainStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)