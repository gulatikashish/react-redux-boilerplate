import { FETCH_USERS, FETCH_USERS_FALIURE, FETCH_USERS_SUCCESS } from "./users.constant";

const initialState = {
  isFetching: false,
  users: [],
  errorMessage: '',
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.users,
        error: false
      })
    case FETCH_USERS_FALIURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.err,
        error: true
      })
    default:
      return state

  }

}

