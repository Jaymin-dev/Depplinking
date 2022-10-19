import {
  USER_FRIENDLIST,
  RESET_FLAGS,
  ADD_FRIEND_REQUEST,
} from '../reducers/reducer';

export const getFriendList = payload => ({
  type: USER_FRIENDLIST,
  payload,
});

export const addFriend = payload => ({
  type: ADD_FRIEND_REQUEST,
  payload,
});


export const resetFlags = () => ({
  type: RESET_FLAGS,
});

