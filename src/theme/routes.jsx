import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Progress from './progress'
import Navigation from './navigation'
import TopHeader from './topHeader'
import Footer from './footer'
import Dashboard from "../pages/dashboard";

import { correctHeight, detectBody } from './helpers/helpers'
import './assets/dependencies'
import { setRoutesStatus } from './actions/routesActions'

class Routes extends Component {

  componentDidMount() {
    $(window).bind("load resize", function () {
        correctHeight();
        detectBody();
    });
    this.props.setRoutesStatus(true)
  }

  render() {
    const { router, params, location, routes } = this.props;

    return (
        <Fragment>
            <Progress />
            <Navigation />
            <div id="page-wrapper" className="gray-bg">
                <TopHeader />
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

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ setRoutesStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)