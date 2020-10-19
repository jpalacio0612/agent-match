import { SAVE_AUTH_USER } from '../actions/saveAuthUserAction';

export const saveAuthUserReducer = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case SAVE_AUTH_USER:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
