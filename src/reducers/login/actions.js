import { createAction } from 'redux-actions';
import * as TYPES from './types';
import AuthService from '../../service/authService';

const authorization = createAction(TYPES.AUTHORIZATION);
const registration = createAction(TYPES.REGISTRATION);
const signOut = createAction(TYPES.SIGNOUT);

export const auth = (email, password) => dispatch =>
  AuthService.auth(email, password).then(() => {
    dispatch(authorization());
  });

export const out = () => dispatch =>
  AuthService.signOut().then(() => {
    dispatch(signOut());
  });

export const reg = (firstName, lastName, email, password) => dispatch =>

  dispatch(authorization());
