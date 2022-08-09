import React, { useEffect, useState } from "react";
import {
  handleActions,
  handleSubscribe,
  handlePublish,
  handleUnsubscribe,
} from "./stateManager";

function useStateManager() {
  const [state, setState] = useState({});
  useEffect(() => {
    dispatch();
  }, []);

  function dispatch(type, payload) {
    setState(handleActions(type, payload));
  }

  function subscribe(event) {
    handleSubscribe(event, (globalState) => console.log(globalState));
    handlePublish(event);
  }
  function unsubscribe(event) {
    handleUnsubscribe(event);
  }
  return { dispatch, state, subscribe, unsubscribe };
}

export default useStateManager;
