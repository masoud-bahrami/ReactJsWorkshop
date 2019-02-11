//Store has some responsibility
//It stores the current state and then every client can get the current state
//It provides dispath function so client can dispath new action for changing state
//It provides subscribe method to notify interested function

const createStore = reducer => {
  let state;
  let listeners = [];
  //get state function for returning current state
  const getState = () => state;

  //dispath for dispath new action
  const dispatch = action => {
    //first using reducer we get next state and store it
    state = reducer(state, action);
    //then all listeners should be fired
    listeners.forEach(listener => listener(state));
  };

  //subscribe method for subscribe to state changes
  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners.filter(l => l !== listener);
    };
  };
  return { getState, dispatch, subscribe };
};

exports.createStore = createStore;
//export default { createStore: Store };
