import { CounterActions } from "../action";
import { INCREMENTS, DECREMENTS, UPDATE } from "../types";

describe("Action", () => {
  test("Incrementsのアクションオブジェクト作成", () => {
    const expectAtion = {
      type: INCREMENTS,
      payload: {
        offset: 10,
      },
    };
    expect(CounterActions.Increments(10)).toEqual(expectAtion);
  });

  test("Decrementのアクションオブジェクト作成", () => {
    const expectAtion = {
      type: DECREMENTS,
      payload: {
        offset: 10,
      },
    };
    expect(CounterActions.Decrements(10)).toEqual(expectAtion);
  });

  test("Updateのアクションオブジェクト作成", () => {
    const expectAtion = {
      type: UPDATE,
      payload: {
        offset: 10,
      },
    };
    expect(CounterActions.Update(10)).toEqual(expectAtion);
  });
});
