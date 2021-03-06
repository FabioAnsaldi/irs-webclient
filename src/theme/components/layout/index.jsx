import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Progress from '../progress'
import Navigation from '../navigation'
import TopHeader from '../topHeader'
import Header from '../header'
import Footer from '../footer'
import Dashboard from "../../../pages/dashboard";

import { correctHeight, detectBody } from '../../helpers/helpers'
import { getParentComponent, getStateFrom } from '../../helpers/helpers'
import '../../assets/dependencies'

import { setComponentLoaded } from './actions'

class Layout extends Component {

    componentWillMount() {
      let parentComponent = getParentComponent(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, false)
    }

    componentDidMount() {
      $(window).bind("load resize", () => {
          correctHeight();
          detectBody();
      });
      
      let parentComponent = getParentComponent(this._reactInternalFiber)
      this.props.setComponentLoaded(parentComponent, true)
    }

    render() {

        const { state } = this.props

        return (
            <Fragment>
                <Progress />
                <Navigation />
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader />
                    <Header title="Dashboard" />
                      <Switch>
                        <Route path="/" exact={true} component={Dashboard} />
                        <Route path="*" component={Dashboard} />
                      </Switch>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({ state: getStateFrom(state, 'layout') })
const mapDispatchToProps = dispatch => bindActionCreators({ setComponentLoaded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)