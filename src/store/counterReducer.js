const initialState = { counter: 0 };

export function counterReducer(action, payload, state = initialState) {
  switch (action) {
    case "increment":
      state.counter += payload;
      return { ...state };

    case "decrement":
      state.counter -= payload;
      return { ...state };

    default:
      return { ...state };
  }
}
