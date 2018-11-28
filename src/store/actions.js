import Auth from 'j-toker';

export const AUTHORIZATION = 'AUTHORIZATION';
export const REGISTRATION = 'REGISTRATION';
export const SIGNOUT = 'SIGNOUT';
export const VALIDATE = 'VALIDATE';
export const TEST = 'TEST';

export function authorization(email, password) {
  return dispatch => {
    Auth.emailSignIn({
      email: email,
      password: password
    }).then(function() {
      /* dispatch({
        type: AUTHORIZATION
      }); */
      Auth.validateToken()
        .then(function(user) {
          dispatch({
            type: VALIDATE,
            payload: user
          });
        })
        .fail(() => {
          alert('err');
        });
    }.bind(this));
  };
}
export const registration = (firstName, lastName, email, password) => {
  return {
    type: REGISTRATION,
    payload: {
      firstName,
      lastName,
      email,
      password
    }
  };
};
export function signOut() {
  return dispatch => {
    dispatch({
      type: SIGNOUT
    });
    dispatch({
      type: VALIDATE
    });
  };
}
