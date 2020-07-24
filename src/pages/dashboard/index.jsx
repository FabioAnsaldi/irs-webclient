import React, { Component } from 'react'
import { Button, Modal, DatePicker } from 'antd'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import { getParentComponent, getStateFrom } from '../../theme/helpers/helpers'
import Content from '../../theme/content'

import { setComponentLoaded, setModalStatus } from './actions'

class Dashboard extends Component {

    componentWillMount() {
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
        // eslint-disable-next-line func-names
        $(window).bind('load resize', () => {
            correctHeight()
            detectBody()
        })

        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setComponentLoaded(parentComponent, true)
    }

    openModal(e, state) {
        e.preventDefault()
        let parentComponent = getParentComponent(this._reactInternalFiber)
        this.props.setModalStatus(parentComponent, state)
    }

    render() {

        const { state } = this.props;

        let isModalOpen = state && state.isModalOpen

        return (
            <div>
                <Content>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <h1> La nostra dashboard </h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <DatePicker />
                                <Button type="primary" onClick={(e) => this.openModal(e, true)} style={{ marginLeft: 8 }}>
                                    Primary Button
                                </Button>
                            </div>
                        </div>
                    </div>
                </Content>
                <Modal
                    title={"Basic Modal"}
                    visible={isModalOpen}
                    onOk={(e) => this.openModal(e, false)}>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'dashboard') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded, setModalStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)