import { createAction } from 'redux-actions';
import * as TYPES from './types';
import { http } from '../../service/httpService';

const talents = createAction(TYPES.TALENTS);
const jobs = createAction(TYPES.JOBS);
const moreTalents = createAction(TYPES.MORE_TALENTS);
const moreJobs = createAction(TYPES.MORE_JOBS);
const changeSearch = createAction(TYPES.CHANGE_SEARCH);

export const chSearch = search => dispatch => {
  dispatch(changeSearch(search));
};

export const getTalents = search => async dispatch => {
  try {
    const s = await http()
      .get(`/tellents/search?q={${search}}`)
      .then(response => response.data);
    dispatch(talents(s));
  } catch (error) {
    console.error(error);
  }
};

export const getJobs = search => async dispatch => {
  try {
    const s = await http()
      .get(`/jobs/search?page=1&q={${search}}`)
      .then(response => response.data);
    dispatch(jobs(s));
  } catch (error) {
    console.error(error);
  }
};

export const getMoreTalents = (search, nextPage) => async dispatch => {
  try {
    const s = await http()
      .get(`/tellents/search?page=${nextPage}&q={${search}}`)
      .then(response => response.data);
    dispatch(moreTalents(s));
  } catch (error) {
    console.error(error);
  }
};

export const getMoreJobs = (item, nextPage) => async dispatch => {
  try {
    const search = item ? `"q":"${item}"` : '';
    const s = await http()
      .get(`/jobs/search?page=${nextPage}&q={${search}}`)
      .then(response => response.data);
    dispatch(moreJobs(s));
  } catch (error) {
    console.error(error);
  }
};
