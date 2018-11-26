export const AUTHORIZATION = 'AUTHORIZATION';
export const REGISTRATION = 'REGISTRATION';
export const SIGNOUT = 'SIGNOUT';
export const VALIDATE = 'VALIDATE';
export const TEST = 'TEST';

export function authorization(email, password) {
  return dispatch => {
    dispatch({
      type: AUTHORIZATION,
      payload: {
        email,
        password
      }
    });
    dispatch({
      type: TEST
    });
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
  };
}
