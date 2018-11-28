import {
  AUTHORIZATION,
  REGISTRATION,
  SIGNOUT,
  VALIDATE,
  TEST
} from '../actions';
import Auth from 'j-toker';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

const cookieAuthHeaders = document.cookie.replace(/(?:(?:^|.*;\s*)authHeaders\s*\=\s*([^;]*).*$)|^.*$/, '$1');

const initialState = {
  authed: !(!JSON.parse(localStorage.getItem('user'))),
  userToken: JSON.parse(localStorage.getItem('user')),
  registration: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTHORIZATION: {
    return { ...state, authed: !(!JSON.parse(localStorage.getItem('user')))};
  }
  case VALIDATE: {
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    return { ...state, authed: !(!JSON.parse(localStorage.getItem('user'))) };
  }
  case TEST: {
    console.log('qq ' + state.authorization);
    return { ...state };
  }
  case SIGNOUT: {
    Auth.signOut();
    return { ...state, authed: false };
  }
  case REGISTRATION: {
    Auth.emailSignUp({
      config_name: 'default',
      confirm_success_url: 'https://floating-atoll-63112.herokuapp.com/',
      email: action.payload.email,
      first_name: action.payload.firstName,
      last_name: action.payload.lastName,
      password: action.payload.password
    });
    console.log('имя: ' + action.payload.firstName);
    console.log('фамилия: ' + action.payload.lastName);
    console.log('емеил: ' + action.payload.email);
    console.log('пароль: ' + action.payload.password);
    return { ...state, authed: !(!JSON.parse(localStorage.getItem('user'))) };
  }
  default:
    return state;
  }
};
