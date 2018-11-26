import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';
import Auth from 'j-toker';

class ModalLogin extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
    redirect: false
  };

  handleClose = () => {
    this.props.handleClose();
    this.setState({ email: '', password: '' });
  };
  handleErr = () => {
    console.log('введи все поля');
  };
  handleChange = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value, disabled: !name });
  };
  handleAuth = () => {
    const { email, password } = this.state;
    this.props.onAuth(email, password);
    this.setState({ email: '', password: '' });
    this.props.handleClose();
    Auth.validateToken()
      .then(
        function(user) {
          this.setState({ redirect: true });
        }.bind(this)
      )
      .fail(function() {});
  };

  render() {
    const { show } = this.props;
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to='/home' />;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>Login Into Your Account</Modal.Header>
          <Modal.Body>
            <input
              className='input'
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <input
              className='input'
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            <br />
            <Link
              to='/'
              onClick={
                this.state.email && this.state.password
                  ? this.handleAuth
                  : this.handleErr
              }
            >
              Login
            </Link>
            <Button
              onClick={
                this.state.email && this.state.password
                  ? this.handleAuth
                  : this.handleErr
              }
            >
              <Link to='/'>LOG IN</Link>
            </Button>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}
export default ModalLogin;
