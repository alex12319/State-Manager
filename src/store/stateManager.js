import { counterReducer } from "./counterReducer";

let globalState = {};
const listeners = {};

export function handleSubscribe(event, callback) {
  if (!listeners[event]) {
    listeners[event] = [];
  }

  listeners[event].push(callback);
  return () => unsubscribe(event, callback);
}

function unsubscribe(event, callback) {
  listeners[event] = listeners[event].filter((l) => l !== callback);
}

export function handlePublish(event) {
  if (!listeners[event]) {
    return;
  }
  listeners[event].forEach((item) => {
    console.log(`${event}:${item}`);
  });
}

export function handleActions(action, payload) {
  globalState = {
    ...globalState,
    ...counterReducer(action, payload),
  };

  for (let item in listeners) {
    listeners[item].forEach((listener) => listener(globalState));
  }

  return { ...globalState };
}
