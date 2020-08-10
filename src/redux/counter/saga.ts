import { takeEvery, put, select } from "redux-saga/effects";
import { INCREMENTS, DECREMENTS, CounterState } from "./types";
import { CounterActionType, CounterActions } from "./action";

const selector = (state: any) => state.counter;

function* saga() {
  yield takeEvery(INCREMENTS, increments);
  yield takeEvery(DECREMENTS, decrements);
}

function* increments(action: CounterActionType) {
  const state: CounterState = yield select(selector);
  yield put(CounterActions.Update(state.count + action.payload.offset));
}

function* decrements(action: CounterActionType) {
  const state: CounterState = yield select(selector);
  yield put(CounterActions.Update(state.count - action.payload.offset));
}

export default saga;
