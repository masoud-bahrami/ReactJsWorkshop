const Consts = require("./Consts");
//import ActionTypes from "./Consts";
//liker reducer
//the first thing we should developed is reducers
//Reducer works as a state generator.
//It takes the current state and an action and based on generate(return) the next state
//then store update current state
const likerReducer = (state = 0, action) => {
  switch (action.type) {
    case Consts.ActionTypes.Like:
      //case ActionTypes.Like:
      return state + 1;
    case Consts.ActionTypes.Dislike:
      //case ActionTypes.Dislike:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
exports.likerReducer = likerReducer;
//export default likerReducer;
