import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';

class ModalLogin extends React.Component {
  state = {
    email: '',
    password: ''
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
    this.setState({ [name]: e.currentTarget.value });
  };
  handleAuth = () => {
    const { email, password } = this.state;
    this.props.onAuth(email, password);
    this.setState({ email: '', password: '' });
    this.props.handleClose();
  };

  render() {
    const { show } = this.props;
    const { email, password } = this.state;
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
