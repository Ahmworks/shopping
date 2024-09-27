import { ADD, REMOVE, CLEAR } from "../type/basketType";

export const add = (payload) => ({
  type: ADD,
  payload: payload,
});

export const remove = (payload) => ({
  type: REMOVE,
  payload: payload,
});

export const clear = (payload) => ({
  type: CLEAR,
  payload: payload,
});
