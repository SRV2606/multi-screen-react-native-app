import {
  EMAIL_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  LOGIN_USER_INITIATED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  isSpinning: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: '', isSpinning: false};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Auth Failed', password: '', isSpinning: false};
    case LOGIN_USER_INITIATED:
      return {...state, isSpinning: action.payload};
    default:
      return state;
  }
};
