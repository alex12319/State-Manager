import React, { useEffect, useState } from "react";
import { store } from "./stateManager";

function useStateManager() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.dispatch();
  }, []);
  function dispatch(action, payload) {
    store.dispatch(action, payload);
  }
  function subscribe(event) {
    const subscription = store.subscribe(event, setState);

    return () => subscription();
  }
  return { state, dispatch, subscribe };
}

export default useStateManager;
