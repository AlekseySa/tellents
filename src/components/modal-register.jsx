import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';

class ModalRegister extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  handleClose = () => {
    this.props.handleClose();
    this.setState({ firstName: '', lastName: '', email: '', password: '' });
  };
  handleChange = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value });
  };
  handleReg = () => {
    const { firstName, lastName, email, password } = this.state;
    this.props.onReg(firstName, lastName, email, password);
    this.setState({ firstName: '', lastName: '', email: '', password: '' });
    this.props.handleClose();
  };
  render() {
    const { show } = this.props;
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div>Please Sign Up</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Join over 2 million tallents already using Tellents. Start now for
              free!
              <input
                className='input'
                type='text'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
              />
              <br />
              <input
                className='input'
                type='text'
                name='lastName'
                value={lastName}
                onChange={this.handleChange}
              />
              <br />
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
              <Button onClick={this.handleReg}>START NOW</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div>Or you could sign up with</div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalRegister;
