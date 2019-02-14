import { FETCH_USERS, FETCH_USERS_FALIURE, FETCH_USERS_SUCCESS } from './users.constant';

export function fetchUsers() {
  return {
    type: FETCH_USERS
  }
}

export function fetchUsersSuccess(res) {
  return {
    type: FETCH_USERS_SUCCESS,
    users: res.data
  }
}

export function fetchUsersFaliure(err) {
  return {
    type: FETCH_USERS_FALIURE,
    err
  }
}

