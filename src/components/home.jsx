import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authorization, registration, signOut } from '../store/actions';

import { Button } from 'react-bootstrap';
import ModalRegister from './modal-register';
import ModalLogin from './modal-login';

import { Link, Redirect } from 'react-router-dom';
import Auth from 'j-toker';

import '../css/home.css';

class Home extends React.Component {
  state = {
    showRegister: false,
    showLogin: false,
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
  };
  handleReg = (firstName, lastName, email, password) => {
    this.props.registration(firstName, lastName, email, password);
  };
  handleOut = () => {
    this.props.signOut();
  };
  renderHome = () => {
    const { showRegister, showLogin } = this.state;
    const { authed } = this.props;
    return (
      <div>
        {!authed && (
          <div>
            <Button className='button' onClick={this.handleShowRegister}>
              Register
            </Button>
            <Button className='button' onClick={this.handleShowLogin}>
              Login
            </Button>
          </div>
        )}

        {authed && (
          <div>
            <Link className='button' to='/skills'>Skills</Link>
            <Link className='button' to='/talent'>Talents</Link>
            <Button className='button' onClick={this.handleOut}>
              Sign Out
            </Button>
          </div>
        )}
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
    /* return (
      <div>
        {this.state.redirect && <Redirect to='/login' />}
        <Link to='/skills'>Skills</Link>
        <Link to='/talent'>Talents</Link>
        <Button className='button' onClick={this.handleOut}>
          Sign Out
        </Button>
      </div>
    ); */
  };

  render() {
    return <div>{this.renderHome()}</div>;
  }
}

Home.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  authed: PropTypes.bool,
  authorization: PropTypes.func,
  registration: PropTypes.func,
  signOut: PropTypes.func
};

export const stateToProps = state => {
  return {
    authed: state.loginReducer.authed
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
)(Home);
