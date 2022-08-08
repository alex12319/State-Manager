import { useState } from "react";
import handleDispatchActions from "./handleDispatchActions";

const initialState = {
  counter: {
    state: 0,
  },
};

function useStateManager() {
  const [state, setState] = useState(initialState);
  const listeners = [];

  function dispatch(action) {
    handleDispatchActions(state, setState, action);
    listeners.forEach((listener) => listener());
  }
  function subscribe() {
    listeners.push(() => console.log(state));
  }
  return { dispatch, state, subscribe };
}

export default useStateManager;
