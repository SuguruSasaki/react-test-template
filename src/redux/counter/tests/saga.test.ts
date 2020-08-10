import { default as counterSaga } from "../saga";
import { CounterActions } from "../action";
import { expectSaga } from "redux-saga-test-plan";

describe("Counterのテスト", () => {
  test("カウンターを10増加する", () => {
    const state = {
      counter: {
        count: 10,
      },
    };
    return expectSaga(counterSaga)
      .withState(state)
      .dispatch(CounterActions.Increments(10))
      .put(CounterActions.Update(20))
      .run();
  });

  test("カンターが10現象する", () => {
    const state = {
      counter: {
        count: 10,
      },
    };

    return expectSaga(counterSaga)
      .withState(state)
      .dispatch(CounterActions.Decrements(10))
      .put(CounterActions.Update(0))
      .run();
  });
});
