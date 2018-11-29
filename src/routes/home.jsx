import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/* import { authorization, registration, signOut } from '../store/actions'; */
import { auth, out, reg } from '../reducers/login/actions'

import { Button } from 'react-bootstrap';
import ModalRegister from '../components/modal-register';
import ModalLogin from '../components/modal-login';

import { Link, Redirect } from 'react-router-dom';

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
            <Link className='button' to='/dashboard/your-office/skills'>Skills</Link>
            <Link className='button' to='/dashboard/find/talent'>Talents</Link>
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
    authed: state.reducer.authed
  };
};
export const dispatchToProps = dispatch => {
  return {
    authorization: bindActionCreators(auth, dispatch),
    registration: bindActionCreators(reg, dispatch),
    signOut: bindActionCreators(out, dispatch)
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(Home);
