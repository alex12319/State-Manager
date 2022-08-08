import React from "react";
import useStateManager from "../store/counterStore";

function Counter() {
  const {
    dispatch,
    subscribe,
    state: {
      counter: { state },
    },
  } = useStateManager();

  return (
    <>
      <p>counter:{state}</p>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </>
  );
}

export default Counter;
