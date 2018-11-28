import Auth from 'j-toker';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

class AuthService {
  constructor() {}

  auth( email, password ) {
    return Auth.emailSignIn({
      email: email,
      password: password
    });
  }

  signOut(){
    Auth.signOut();
    localStorage.removeItem('user');
  }

  reg( firstName, lastName, email, password ) {
    return Auth.emailSignUp({
      config_name: 'default',
      confirm_success_url: 'https://floating-atoll-63112.herokuapp.com/',
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password
    });
  }
}
export default new AuthService();