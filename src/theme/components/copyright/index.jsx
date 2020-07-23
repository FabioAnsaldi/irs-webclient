import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getParentComponent, getStateFrom } from '../../helpers/helpers'

import { setComponentLoaded } from './actions'

class Copyright extends Component {
    
    componentWillMount() {
      let parentComponent = getParentComponent(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    render() {
        
        const { state } = this.props

        return (
            <div>
                <strong>Copyright</strong> Best Vision Solutions &amp; Services &copy; 2020
            </div>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'copyright') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Copyright)