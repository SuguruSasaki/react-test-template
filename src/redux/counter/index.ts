import { CounterState, UPDATE } from "./types";
import { CounterActionType } from "./action";
import { Reducer } from "react";

const initialState: CounterState = {
  count: 0,
};

const reducer: Reducer<CounterState, CounterActionType> = (
  state: CounterState = initialState,
  action: CounterActionType
) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        count: action.payload.offset,
      };

    default:
      return state;
  }
};

export default reducer;
