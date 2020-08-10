import { INCREMENTS, DECREMENTS, UPDATE } from "./types";

// Actionを定義
export const CounterActions = {
  Increments: (offset: number) => ({
    type: INCREMENTS,
    payload: {
      offset,
    },
  }),
  Decrements: (offset: number) => ({
    type: DECREMENTS,
    payload: {
      offset,
    },
  }),
  Update: (offset: number) => ({
    type: UPDATE,
    payload: {
      offset,
    },
  }),
};

// Actionの型定義
export type CounterActionType =
  | ReturnType<typeof CounterActions.Increments>
  | ReturnType<typeof CounterActions.Decrements>
  | ReturnType<typeof CounterActions.Update>;
