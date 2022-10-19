export const USER_FRIENDLIST = 'USER_FRIENDLIST';
export const USER_FRIENDLIST_SUCCESS = 'USER_FRIENDLIST_SUCCESS';
export const USER_FRIENDLIST_ERROR = 'USER_FRIENDLIST_ERROR';

export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';

export const RESET_FLAGS = 'RESET_FLAGS';
export const LOGOUT = 'LOGOUT';

const initialState = {
  user: null,
  resetPassword: null,
  stateList: null,
  friendList: [],
  errors: {
    friendList: null,
  },
  flags: {
    friendListSuccess: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FRIENDLIST_SUCCESS:
      return {
        ...state,
        flags: {...state.flags, friendListSuccess: true},
        friendList: action.data,
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        flags: {...state.flags, friendListSuccess: true},
        // friendList: action.data,
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
