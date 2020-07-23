import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getParentComponent } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Header extends Component {
    
    componentWillMount() {
      let parentComponent = getParentComponent.call(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        let parentComponent = getParentComponent.call(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-sm-4">
                    <h2>{this.props.title}</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <strong>&nbsp;</strong>
                        </li>
                        <li className="breadcrumb-item active">
                            <strong>{this.props.title}</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-sm-8">
                    <div className="title-action">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)