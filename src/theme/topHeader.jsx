import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setTopHeaderStatus } from './actions/topHeader'
import { smoothlyMenu } from './helpers/helpers'

class TopHeader extends Component {

    componentDidMount() {
        this.props.setTopHeaderStatus(true)
    }

    toggleNavigation(e) {
        e.preventDefault()
        $("body").toggleClass("mini-navbar")
        smoothlyMenu()
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => this.toggleNavigation(e)} href="#"><i className="fa fa-bars"></i> </a>
                        <form role="search" className="navbar-form-custom" method="post" action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Do your research..." className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-out"></i> Exit
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({ topHeader: state.main.layout && state.main.layout.topHeader })
const mapDispatchToProps = dispatch => bindActionCreators({ setTopHeaderStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)