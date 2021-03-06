import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  authed: !!JSON.parse(localStorage.getItem('user')),
  user: JSON.parse(localStorage.getItem('user')),
};

export const loginReducer = handleActions(
  {
    [TYPES.AUTHORIZATION]: state => ({
      ...state,
      authed: !!JSON.parse(localStorage.getItem('user')),
    }),
    [TYPES.SIGNOUT]: state => ({
      ...state,
      authed: !!JSON.parse(localStorage.getItem('user')),
    }),
    [TYPES.SET_CURRENT_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState,
);
