import { createAction } from 'redux-actions';
import * as TYPES from './types';
import AuthService from '../../service/authService';

const authorization = createAction(TYPES.AUTHORIZATION);
const signOut = createAction(TYPES.SIGNOUT);
const setCurrentUser = createAction(TYPES.SET_CURRENT_USER);

export const auth = (email, password) => async dispatch => {
  try {
    const user = await AuthService.auth(email, password);
    localStorage.setItem('user', JSON.stringify(user.data));
    dispatch(setCurrentUser(user));
    dispatch(authorization());
  } catch (error) {
    console.error(error);
  }
};

export const out = () => async dispatch => {
  try {
    await AuthService.signOut();
    dispatch(signOut());
  } catch (error) {
    console.error(error);
  }
};

export const reg = (firstName, lastName, email, password) => async dispatch => {
  try {
    const user = await AuthService.reg(firstName, lastName, email, password);
    localStorage.setItem('user', JSON.stringify(user.data));
    dispatch(setCurrentUser(user));
    dispatch(authorization());
  } catch (error) {
    console.error(error);
  }
};
