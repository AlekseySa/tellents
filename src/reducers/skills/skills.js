import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  professions: null,
  professionsList: null,
  fetching: false,
  checkProfession: null,
  changeProfession: null,
  tagList: null,
};

export const skillsReducer = handleActions(
  {
    [TYPES.SET_PROFESSIONS]: (state, action) => ({
      ...state,
      professions: action.payload,
    }),
    [TYPES.SET_PROFESSIONS_LIST]: (state, action) => ({
      ...state,
      professionsList: action.payload,
      fetching: true,
    }),
    [TYPES.CHECK_PROFESSION]: (state, action) => ({
      ...state,
      checkProfession: action.payload,
    }),
    [TYPES.CHANGE_PROFESSION]: (state, action) => ({
      ...state,
      changeProfession: action.payload,
    }),
    [TYPES.SET_TAG_LIST]: (state, action) => ({
      ...state,
      tagList: action.payload,
    }),
  },
  initialState,
);
