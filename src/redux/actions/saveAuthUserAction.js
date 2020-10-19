export const SAVE_AUTH_USER = 'SAVE_AUTH_USER';

export const saveAuthUserAction = (data) => {
  return {
    type: SAVE_AUTH_USER,
    payload: data,
  };
};
