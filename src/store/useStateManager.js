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
  function publish(event) {
    store.publish(event);
  }
  return { state, dispatch, subscribe, publish };
}

export default useStateManager;
