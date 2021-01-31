import { SET_MEASSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MEASSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
