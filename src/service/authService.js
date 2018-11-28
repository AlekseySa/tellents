import Auth from 'j-toker';

class AuthService {
  constructor() {}

  auth( email, password ) {
    Auth.emailSignIn({
      email: email,
      password: password
    }).then(function() {
      Auth.validateToken()
        .then(function(user) {
          localStorage.setItem('user', JSON.stringify(user));
        }.bind(this))
        .fail(() => {
          alert('err');
        });
    }.bind(this));
  }

  signOut(){
    Auth.signOut()
      .then(function() {
        localStorage.removeItem('user');
      });
  }
}
export default new AuthService();