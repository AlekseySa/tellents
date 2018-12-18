import axios from 'axios';

const getSkillsFromCookie = () => {
  const name = 'authHeaders';
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const http = () => {
  const data = JSON.parse(getSkillsFromCookie());
  const headers = data;
  const instance = axios.create({
    baseURL: 'https://floating-atoll-63112.herokuapp.com/api/v1',
    headers,
    withCredentials: true,
  });

  instance.interceptors.response.use(response => response, error => Promise.reject(error));

  return instance;
};
