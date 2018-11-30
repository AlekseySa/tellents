import { createAction } from 'redux-actions';
import * as TYPES from './types';
import axios from 'axios';

const setProfessions = createAction(TYPES.SET_PROFESSIONS);
const setProfessionsList = createAction(TYPES.SET_PROFESSIONS_LIST);

const getSkillsFromCookie = () => {
  const name = 'authHeaders';
  var matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const http = function() {
  const data = JSON.parse(getSkillsFromCookie());
  const headers = data;
  const instance = axios.create({
    baseURL: 'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/user',
    headers
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  return instance;
};

export const setSkills = () => async dispatch =>{
  try {
    const s = await http().get().then(response => {
      return response.data.profession_categories;
    });
    console.log('массив из actions: ');
    console.log(s);
    dispatch(setProfessions(s));
  }
  catch (error) {
    console.error(error);
  }
};
export const setProf = (s) => dispatch => {
  dispatch(setProfessionsList(s));
};