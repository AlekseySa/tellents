import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = { authed: !(!JSON.parse(localStorage.getItem('user'))) };

export const reducer = handleActions(
  {
    [TYPES.AUTHORIZATION]: (state) => ({
      ...state, authed: !(!JSON.parse(localStorage.getItem('user')))
    }),
    [TYPES.SIGNOUT]: (state) => ({
      ...state, authed: !(!JSON.parse(localStorage.getItem('user')))
    })
  },
  initialState
);
