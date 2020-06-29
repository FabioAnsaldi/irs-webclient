import React, { Component } from 'react'
import { Button, Modal, DatePicker } from 'antd'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../theme/header'
import Content from '../../theme/content'

import { setModalStatus } from './actions'

class Index extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="Dashboard">
                    <Button onClick={() => this.props.setModalStatus(true)}>Open</Button>
                </Header>
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
                                <Button type="primary" onClick={() => this.props.setModalStatus(true)} style={{ marginLeft: 8 }}>
                                    Primary Button
                                </Button>
                            </div>
                        </div>
                    </div>
                </Content>
                <Modal
                    title={"Basic Modal"}
                    visible={false}
                    onOk={() => this.props.setModalStatus(false)}>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({ main: state.main })
const mapDispatchToProps = dispatch => bindActionCreators({ setModalStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)