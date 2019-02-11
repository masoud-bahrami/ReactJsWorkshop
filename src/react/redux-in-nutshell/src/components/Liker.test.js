const expect = require("expect");
//import expect from "expect";
const Reducer = require("./Liker.js");
//import likerReducer from "./Liker";
const Consts = require("./Consts");
//import ActionTypes from "./Consts";

//counter reducer
expect(Reducer.likerReducer(0, { type: Consts.ActionTypes.Like })).toEqual(1);
expect(Reducer.likerReducer(1, { type: Consts.ActionTypes.Like })).toEqual(2);

expect(Reducer.likerReducer(2, { type: Consts.ActionTypes.Dislike })).toEqual(
  1
);
expect(Reducer.likerReducer(1, { type: Consts.ActionTypes.Dislike })).toEqual(
  0
);
expect(Reducer.likerReducer(0, { type: Consts.ActionTypes.Dislike })).toEqual(
  0
);

console.log("Tests passed!");
