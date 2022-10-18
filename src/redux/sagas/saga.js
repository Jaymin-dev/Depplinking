import {all, call, put, takeLatest} from 'redux-saga/effects';
import {request, setupHttpConfig} from '../../Core/http';
import {
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

export default all([takeLatest(USER_FRIENDLIST, handleList)]);
