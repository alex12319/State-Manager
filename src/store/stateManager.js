import { counterReducer } from "./counterReducer";

let initialState = {};

function createStore(reducer, initialState) {
  const store = {};
  let state = initialState;
  const listeners = {};
  store.getState = () => state;
  store.dispatch = (action, payload) => {
    state = reducer(action, payload);

    for (let item in listeners) {
      listeners[item].forEach((listener) => listener(state));
    }
  };
  store.subscribe = (event, callback) => {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(callback);
    return () => unsubscribe(event, callback);
  };
  store.publish = (event) => {
    if (!listeners[event]) {
      return;
    }

    listeners[event].forEach((item) => {
      console.log(`${event}:${item}`);
    });
  };
  function unsubscribe(event, callback) {
    listeners[event] = listeners[event].filter(
      (listener) => listener !== callback
    );
  }
  return store;
}

function combineReducers(obj) {
  return (action, payload) => {
    for (let key in obj) {
      initialState = { ...initialState, ...obj[key](action, payload) };
    }
    return initialState;
  };
}
const reducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(reducer, initialState);
