export const SAVE_AUTH_USER = 'SAVE_AUTH_USER';
export const UPDATE_POSITION = 'UPDATE_POSITION';

export const saveAuthUserAction = (data) => {
  return {
    type: SAVE_AUTH_USER,
    payload: data,
  };
};

export const updatePositionAction = (data) => {
  return {
    type: UPDATE_POSITION,
    payload: data,
  };
};
