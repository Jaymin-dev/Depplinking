export const USER_FRIENDLIST = 'USER_FRIENDLIST';
export const USER_FRIENDLIST_SUCCESS = 'USER_FRIENDLIST_SUCCESS';
export const USER_FRIENDLIST_ERROR = 'USER_FRIENDLIST_ERROR';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const USER_FORGOT_PASSWORD_REQUEST = 'USER_FORGOT_PASSWORD_REQUEST';
export const USER_FORGOT_PASSWORD_SUCCESS = 'USER_FORGOT_PASSWORD_SUCCESS';
export const USER_FORGOT_PASSWORD_ERROR = 'USER_FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const GET_STATE_REQUEST = 'GET_STATE_REQUEST';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_ERROR = 'GET_STATE_ERROR';

export const RESET_FLAGS = 'RESET_FLAGS';
export const LOGOUT = 'LOGOUT';

const initialState = {
  user: null,
  resetPassword: null,
  stateList: null,
  friendList: [],
  errors: {
    login: null,
  },
  flags: {
    loginSuccess: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FRIENDLIST_SUCCESS:
      return {
        ...state,
        flags: {...state.flags, registerSuccess: true},
        friendList: action.data,
      };
    case USER_FRIENDLIST_ERROR:
      return {
        ...state,
        errors: {...state.errors, ...state.errors, register: action.error},
      };

    case RESET_FLAGS:
      return {...state, errors: initialState.errors, flags: initialState.flags};
    default:
      return state;
  }
};
