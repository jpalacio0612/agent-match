import { SAVE_AUTH_USER } from '../actions/authUserActions';
import { UPDATE_POSITION } from '../actions/authUserActions';

export const saveAuthUserReducer = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case SAVE_AUTH_USER:
      return action.payload;
    case UPDATE_POSITION:
      return {
        ...state,
        lastLatitude: action.payload.lastLatitude,
        lastLongitude: action.payload.lastLongitude,
      };
    default:
      return state;
  }
};
