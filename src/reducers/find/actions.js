import { createAction } from 'redux-actions';
import * as TYPES from './types';
import { http } from '../../service/httpService';

export const talents = createAction(TYPES.TALENTS);

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
