import {all, call, put, takeLatest} from 'redux-saga/effects';
import {request, setupHttpConfig} from '../../Core/http';
import {
  ADD_FRIEND_ERROR,
  ADD_FRIEND_REQUEST,
  ADD_FRIEND_SUCCESS,
  USER_FRIENDLIST,
  USER_FRIENDLIST_ERROR,
  USER_FRIENDLIST_SUCCESS,
} from '../reducers/reducer';

function friendListApo() {
  return request.get(
    'https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice',
  );
}

function* handleList(action) {
  try {
    yield setupHttpConfig();
    const {data} = yield call(friendListApo, action.payload);
    if (data) {
      yield put({
        type: USER_FRIENDLIST_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: USER_FRIENDLIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: USER_FRIENDLIST_ERROR,
      error: 'Something went wrong, Please try again later',
    });
  }
}

function addUserApi(payload) {
  
  return request.post(
    'https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice',
    payload,
  );
}

function* addUserhandle(action) {
  try {
    yield setupHttpConfig();
    const {data} = yield call(addUserApi, action.payload);
    if (data) {
      yield put({
        type: ADD_FRIEND_SUCCESS,
        data,
      });
      yield put({
        type: USER_FRIENDLIST,
      });
    } else {
      yield put({
        type: ADD_FRIEND_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: ADD_FRIEND_ERROR,
      error: 'Something went wrong, Please try again later',
    });
  }
}

export default all([
  takeLatest(USER_FRIENDLIST, handleList),
  takeLatest(ADD_FRIEND_REQUEST, addUserhandle),
]);
