import {
  AUTHORIZATION,
  REGISTRATION,
  SIGNOUT,
  VALIDATE,
  TEST
} from '../actions';
import Auth from 'j-toker';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

const initialState = {
  authed: !(!document.cookie.replace(/(?:(?:^|.*;\s*)authHeaders\s*\=\s*([^;]*).*$)|^.*$/, '$1')),
  registration: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTHORIZATION: {
    Auth.emailSignIn({
      email: action.payload.email,
      password: action.payload.password
    });
    console.log('емеил: ' + action.payload.email);
    console.log('пароль: ' + action.payload.password);
    return { ...state };
  }
  case VALIDATE: {
    let username = '';
    Auth.validateToken()
      .then(function(user) {
        username = user.email;
        console.log('юзер: ' + username);
        console.log('qq2 ' + !!username);
      })
      .fail(() => {
        alert('err');
      });
    return { ...state, authed: true };
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
    return { ...state, registration: '' };
  }
  default:
    return state;
  }
};
