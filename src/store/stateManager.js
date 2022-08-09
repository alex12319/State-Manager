const globalState = {
  counter: 0,
};
const listeners = {};

export function handleSubscribe(event, callback) {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  listeners[event].push(callback);
}

export function handleUnsubscribe(event) {
  if (listeners[event]) {
    listeners[event].pop();
  }
}

export function handlePublish(event, data) {
  if (!listeners[event]) {
    return;
  }
  listeners[event].forEach((item) => item(globalState));
}

export function handleActions(action) {
  switch (action) {
    case "increment":
      globalState.counter += 1;
      return { ...globalState };

    case "decrement":
      globalState.counter -= 1;
      return { ...globalState };

    default:
      return { ...globalState };
  }
}
