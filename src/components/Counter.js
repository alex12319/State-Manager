import React from "react";
import useStateManager from "../store/counterStore";
import "../style.css";

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
      <div className="container">
        <h2>Counter: {state}</h2>
        <div className="btns">
          <button onClick={() => dispatch("increment")}>increment</button>
          <button onClick={() => dispatch("decrement")}>decrement</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
