import {
  USER_FRIENDLIST,
  RESET_FLAGS,
} from '../reducers/reducer';

export const getFriendList = payload => ({
  type: USER_FRIENDLIST,
  payload,
});

export const resetFlags = () => ({
  type: RESET_FLAGS,
});

