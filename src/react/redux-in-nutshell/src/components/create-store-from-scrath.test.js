const Store = require("./create-store-from-scrath");
//import Store from "./create-store-from-scrath";
const Liker = require("./Liker");
//imprt Liker  from("./Liker");
const Actions = require("./Consts");
//import ActionTypes from "./Consts";

const store = Store.createStore(Liker.likerReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: Actions.ActionTypes.Like });
store.dispatch({ type: Actions.ActionTypes.Like });
store.dispatch({ type: Actions.ActionTypes.Like });
store.dispatch({ type: Actions.ActionTypes.Dislike });
