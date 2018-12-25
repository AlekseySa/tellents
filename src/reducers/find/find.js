import { handleActions } from 'redux-actions';
import * as TYPES from './types';

export const initialState = {
  users: null,
  meta: null,
  fetching: false,
  jobs: null,
  metaJobs: null,
  fetchingJobs: false,
  search: '',
};

export const findReducer = handleActions(
  {
    [TYPES.CHANGE_SEARCH]: (state, action) => ({
      ...state,
      search: action.payload,
    }),
    [TYPES.TALENTS]: (state, action) => ({
      ...state,
      users: action.payload.users,
      meta: action.payload.meta,
      fetching: true,
    }),
    [TYPES.MORE_TALENTS]: (state, action) => ({
      ...state,
      users: state.users.concat(action.payload.users),
      meta: action.payload.meta,
      fetching: true,
    }),
    [TYPES.JOBS]: (state, action) => ({
      ...state,
      jobs: action.payload.jobs,
      metaJobs: action.payload.meta,
      fetchingJobs: true,
    }),
    [TYPES.MORE_JOBS]: (state, action) => ({
      ...state,
      jobs: state.jobs.concat(action.payload.jobs),
      metaJobs: action.payload.meta,
      fetchingJobs: true,
    }),
  },
  initialState,
);
