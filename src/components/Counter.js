import React from "react";
import useStateManager from "../store/useStateManager";
import "../style.css";

function Counter() {
  const { state, dispatch, subscribe } = useStateManager();
  const unsubscribe = subscribe("increment");

  return (
    <>
      <div className="container">
        <h2>Counter:{state.counter} </h2>
        <div className="btns">
          <button
            onClick={() => {
              dispatch("increment", 1);
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch("decrement", 1);
            }}
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
