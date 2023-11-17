import { Action } from "../ngrx-fake/ngrx";

//Use reducer function
export const incrementationAction: Action = {
  type: "INCREMENT",
};

export const decrementationAction: Action = {
  type: "DECREMENT",
};

export const multiplyAction: Action = {
  type: "MULTIPLY",
  payload: 2,
};

export const divideAction: Action = {
  type: "DIVIDE",
  payload: 2,
};

export const resetAction: Action = {
  type: "RESET",
};
