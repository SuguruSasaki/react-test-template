// Action Type
export const INCREMENTS = "COUNTER/INCREMENTS" as const;
export const DECREMENTS = "COUNTER/DECREMENTS" as const;
export const UPDATE = "COUNTER/UPDATE" as const;

// State
export interface CounterState {
  count: number;
}
