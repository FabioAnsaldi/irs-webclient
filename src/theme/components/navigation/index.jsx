import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuItem from '../menuItem'
import MenuTree from '../menuTree'

import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'
import logo from '../../assets/img/logo.png'

class Navigation extends Component {
    
    componentWillMount() {
      let parentComponent = getParentComponent(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {

        const { menu } = this.refs

        $(() => {
            $(menu).metisMenu({
                toggle: true,
                subMenu:'.nav-second-level'
            })
        })

        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {

        const { state } = this.props
        
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu" ref="menu" style={{ zIndex: 2000 }}>
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <img alt="image" className="rounded-circle" src={logo} height="60" />
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="block m-t-xs font-bold">Fabio Ansaldi</span>
                                    <span className="text-muted text-xs block">Administrator <b className="caret"></b></span>
                                </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <MenuItem componentName="user" className="dropdown-item" path="/settings/user" icon="gear" label="Preferences" />
                                    <li className="dropdown-divider"></li>
                                    <MenuItem componentName="logout" path="/logout" icon="sign-out" label="Exit" />
                                </ul>
                            </div>
                            <div className="logo-element">
                                <span>IRS</span>
                            </div>
                        </li>
                        <li>
                            <MenuTree componentName="dashboard">
                                <MenuItem path="/dashboard" icon="home" label="Dashboard" tree={true} />
                            </MenuTree>
                        </li>
                        <li>
                            <MenuTree
                                componentName="general"
                                className="nav-second-level"
                                icon="building-o"
                                label="General"
                                collapse="true">
                                <MenuItem componentName="page1" path="/page1" label="Page Example 1" tree={true} />
                                <MenuItem componentName="page2" path="/page2" label="Page Example 2" tree={true} />
                            </MenuTree>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'navigation') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)