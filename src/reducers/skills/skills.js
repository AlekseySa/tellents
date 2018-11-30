import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  professions: null,
  professionsList: null,
  fetching: false
};

export const skillsReducer = handleActions(
  {
    [TYPES.SET_PROFESSIONS]: (state, action) => ({
      ...state, professions: action.payload
    }),
    [TYPES.SET_PROFESSIONS_LIST]: (state, action) => ({
      ...state, professionsList: action.payload, fetching: true
    })
  },
  initialState
);
