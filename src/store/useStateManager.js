import React, { useEffect, useState } from "react";
import { handleActions, handleSubscribe, handlePublish } from "./stateManager";

function useStateManager() {
  const [state, setState] = useState({});
  useEffect(() => {
    setState(handleActions());
  }, []);

  function dispatch(type, payload) {
    handleActions(type, payload);
  }

  function subscribe(event) {
    const subscription = handleSubscribe(event, setState);

    return () => subscription();
  }

  function publish(event) {
    handlePublish(event);
  }

  return { dispatch, state, subscribe, publish };
}

export default useStateManager;
