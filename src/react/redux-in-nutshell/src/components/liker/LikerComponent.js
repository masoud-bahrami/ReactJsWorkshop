import React, { Component } from "react";
import { createStore } from "redux";
import Reducer from "../Liker";
import Consts from "../Consts";
import Store from "../create-store-from-scrath";

const LikerRenderer = ({ value, onLike, onDislike }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onLike}>Like</button>{" "}
      <button onClick={onDislike}>Dislike</button>
    </div>
  );
};

class LikerComponent extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    //create store using redux
    //this.store = createStore(Reducer.likerReducer);
    //Create store using our custom store :)
    this.store = Store.createStore(Reducer.likerReducer);
    this.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleLike = () => {
    this.store.dispatch({ type: Consts.ActionTypes.Like });
  };
  handleDislike = () => {
    this.store.dispatch({ type: Consts.ActionTypes.Dislike });
  };
  getValue = () => {
    if (this.store) {
      return this.store.getState();
    }
    return 0;
  };
  render() {
    return (
      <LikerRenderer
        value={this.getValue()}
        onLike={this.handleLike}
        onDislike={this.handleDislike}
      />
    );
  }
}

export default LikerComponent;
