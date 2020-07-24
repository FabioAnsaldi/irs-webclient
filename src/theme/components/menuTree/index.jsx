import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class MenuTree extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        const { state, icon, label, children, collapse, className } = this.props
        const ulClass = classNames({
            'nav': true,
            'collapse': collapse
        });

        return (
            <Fragment>
                {label &&
                    <a href="#">
                        <i className={`fa fa-${icon}`}></i> 
                        <span className="nav-label">{label}</span>
                        <span className="fa arrow"></span>
                    </a>
                }
                <ul className={[ulClass, className].join(' ')}>
                    {children}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'menuTree') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuTree)