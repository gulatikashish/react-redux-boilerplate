/* eslint-disable no-undef */
import { call, fork, put, take } from 'redux-saga/effects';
import { appConfig } from '../../config/index';
import { fetchUsersFaliure, fetchUsersSuccess } from "./users.actions";
import { FETCH_USERS } from "./users.constant";
import UserHelper from "./users.helper";

//**Generator**//
function* watchFetchUsers() {
  while (true) {
    yield take(FETCH_USERS);
    try {
      const response = yield call(fetchUsersCall);
      yield put(fetchUsersSuccess(response));
    } catch (err) {
      yield put(fetchUsersFaliure(err));
    }
  }
}

function fetchUsersCall() {

  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    UserHelper.fetchUsers()
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
}



export default function* root() {
  yield fork(watchFetchUsers);
}