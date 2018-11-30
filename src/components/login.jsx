import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authorization, registration, signOut } from '../store/actions';

import { Button } from 'react-bootstrap';
import ModalRegister from './modal-register';
import ModalLogin from './modal-login';

import { Link, Redirect } from 'react-router-dom';

import '../css/home.css';

class Login extends React.Component {
  state = {
    showRegister: false,
    showLogin: false,
    redirect: false
  };

  handleShowRegister = () => {
    this.setState({ showRegister: true });
  };
  handleShowLogin = () => {
    this.setState({ showLogin: true });
  };
  handleClose = () => {
    this.setState({ showRegister: false, showLogin: false });
  };
  handleAuth = (email, password) => {
    this.props.authorization(email, password);
    this.handleClose();
  };
  handleReg = (firstName, lastName, email, password) => {
    this.props.registration(firstName, lastName, email, password);
    this.handleClose();
  };
  handleOut = () => {
    this.props.signOut();
  };
  renderLogin = () => {
    const { showRegister, showLogin, redirect } = this.state;

    return (
      <div>
        <Button className='button' onClick={this.handleShowRegister}>
          Register
        </Button>
        <Button className='button' onClick={this.handleShowLogin}>
          Login
        </Button>
        <Link to='/' className='button'>
          Login
        </Link>
        <ModalLogin
          show={showLogin}
          handleClose={this.handleClose}
          onAuth={this.handleAuth}
        />
        <ModalRegister
          show={showRegister}
          handleClose={this.handleClose}
          onReg={this.handleReg}
        />
      </div>
    );
  };

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  authorization: PropTypes.func,
  registration: PropTypes.func,
  signOut: PropTypes.func
};

export const stateToProps = state => {
  return {
    authValidate: state.loginReducer.authorization
  };
};
export const dispatchToProps = dispatch => {
  return {
    authorization: bindActionCreators(authorization, dispatch),
    registration: bindActionCreators(registration, dispatch),
    signOut: bindActionCreators(signOut, dispatch)
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(Login);
