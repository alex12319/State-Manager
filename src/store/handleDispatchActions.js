function handleDispatchActions(state, setState, action) {
  switch (action) {
    case "increment": {
      const newState = state.counter.state + 1;
      setState({ counter: { state: newState } });
      break;
    }
    case "decrement": {
      const newState = state.counter.state - 1;
      setState({ counter: { state: newState } });
      break;
    }
  }
}

export default handleDispatchActions;
