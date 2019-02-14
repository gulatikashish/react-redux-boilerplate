import { all } from 'redux-saga/effects';
import userSaga from '../containers/users/users.saga';
export default function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}
