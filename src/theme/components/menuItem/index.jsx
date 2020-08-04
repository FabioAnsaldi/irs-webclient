import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class MenuItem extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        const { state, icon, label, tree, path, className } = this.props

        return (
            <li>
                <Link to={path} className={className}>
                    { icon && <span><i className={`fa fa-${icon}`}></i>&nbsp;</span> }
                    { tree ? label : <span className="nav-label">{label}</span> }
                </Link>
            </li>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'MenuItem') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)