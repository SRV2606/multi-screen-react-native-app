import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_INITIATED,
} from './types';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
export const emailChanged = text => {
  console.log('change_email_text', text);
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  const auth = getAuth();
  return dispatch => {
    dispatch({type: LOGIN_USER_INITIATED, payload: true});
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFail(dispatch));
      })
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserSuccess = (dispatch, user) => {
  console.log('pass', user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
const loginUserFail = (dispatch, user) => {
  console.log('fail', user);
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};
