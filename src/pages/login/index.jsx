import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import config from '../../config';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../theme/assets/dependencies';
import logo from '../../theme/assets/img/logo.png';
//import LoginForm from '../forms/login';
//import CopyRight from '../../theme/copyright';
//import Loading from '../../theme/loading';
import { getLoginStatus, getUserLoginStatus } from './actions';

class Login extends Component {

    componentDidMount() {
        // eslint-disable-next-line func-names
        $(window).bind('load resize', function() {
            correctHeight();
            detectBody();
        });
    }

  /*static getDerivedStateFromProps(nextProps) {
    if (false)
        nextProps.history.push('/');
    return null;
  }*/

  render() {
    //if (this.props.loading) {return <Loading/>;}
    //if (this.props.error) {toastr.error('Get Hired!', this.props.error);}

    return (
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <Link className="nav-link" to="">
            <img alt="" className="img-circle logo" src={logo}/>
          </Link>
          <h3>Get Hired!</h3>
          <p>Login in. To see it in action.</p>

          {/* <LoginForm onSubmit={this.login} /> */}

          <Link to="/activate">
            <small>Forgot Password?</small>
          </Link>
          <p className="text-muted text-center">
            <Link to="/register">Don't have an account?</Link>
          </p>
          <Link className="btn btn-sm btn-white btn-block" to="/activate">Activate Account</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/register">Register</Link>
          <br/>
          {/*<CopyRight/>*/}
        </div>
      </div>
    );
  }

  login (values) {
    const payload = {
      grant_type: config.auth.GRANT_TYPE,
      client_id: config.auth.CLIENT_ID,
      client_secret: config.auth.CLIENT_SECRET,
      username: values.email,
      password: values.password
    };
    this.props.login(payload);
  };
}

const mapStoreToProps = (state) => ({
    user: state.user,
    loading: state.main.layout && state.main.layout.footer
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getLoginStatus, getUserLoginStatus }, dispatch);

export default connect(mapStoreToProps, mapDispatchToProps)(Login);