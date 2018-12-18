import { handleActions } from 'redux-actions';
import * as TYPES from './types';

export const initialState = {
  users: null,
  meta: null,
  fetching: false,
};

export const findReducer = handleActions(
  {
    [TYPES.TALENTS]: (state, action) => ({
      ...state,
      users: action.payload.users,
      meta: action.payload.meta,
      fetching: true,
    }),
  },
  initialState,
);
