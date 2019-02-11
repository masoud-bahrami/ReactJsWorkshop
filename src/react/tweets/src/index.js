import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIgloo,
  faMarker,
  faPlusSquare,
  faTrashAlt,
  faRetweet,
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faPlus,
  faBan
} from "@fortawesome/free-solid-svg-icons";
library.add(faIgloo);
library.add(faMarker);
library.add(faPlusSquare);
library.add(faTrashAlt);
library.add(faRetweet);
library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faHeart);
library.add(faPlus);
library.add(faBan);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
