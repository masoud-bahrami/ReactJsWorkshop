import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import history from "./history";

import SubRoutes from "./SubRoutes";
function onNavigateToHome() {
  return () => {
    console.log("onNavigateToHome");
    createBrowserHistory.push("/Home");
  };
}
function SubRouteComponent({ routes }) {
  return (
    <div>
      <h2>Sub Routes</h2>
      <ul>
        {routes.map((route, i) => {
          return (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
        {routes.map((route, i) => (
          <SubRoutes key={i} {...route} />
        ))}
      </ul>
      <button onClick={() => history.push("/")}>Go Back To home</button>
    </div>
  );
}

function SubRoute1() {
  return <h3>Sub Route 1 for showing nested routes in a dynamic fashion</h3>;
}

function SubRoute2() {
  return <h3>Sub Route 2 for showing nested routes in a dynamic fashion</h3>;
}

export { SubRouteComponent, SubRoute1 as Bus, SubRoute2 as Cart };
