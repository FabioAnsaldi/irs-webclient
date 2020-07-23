import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { smoothlyMenu } from '../../helpers/helpers'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class TopHeader extends Component {
    
    componentWillMount() {
      let parentComponent = getParentComponent(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, false)
    }
    
    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    toggleNavigation(e) {
        e.preventDefault()
        $("body").toggleClass("mini-navbar")
        smoothlyMenu()
    }

    render() {
        
        const { state } = this.props
        
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => this.toggleNavigation(e)} href="#">
                            <i className="fa fa-bars"></i>
                        </a>
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

const mapStateToProps = state => ({ state: getStateFrom(state, 'topHeader') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)