import React from "react";
import SubRoutes from "./SubRoutes";
import Routes from "./RouteRepository";
import history from "./history";

//To do this we should first install react-router via npm or yarn
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RouteConfig = () => {
  return (
    <Router history={history}>
      <div>
        <ul>
          {Routes.map((route, i) => {
            return (
              <li>
                <Link to={route.path}>{route.title}</Link>
              </li>
            );
          })}
          {Routes.map((route, i) => (
            <SubRoutes key={i} {...route} />
          ))}
        </ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About-No Math gonna found!</Link>
        </li>
        <li>
          <Link to="/parameter">Work with Parameter</Link>
        </li>
        <li>
          <Link to="/SubRoutes">SubRoutes</Link>
        </li>
        <li>
          <Link to="/API">Call An API</Link>
        </li>
        <li>
          <Link to="/LifeCycle">LifeCycle</Link>
        </li>
        <li>
          <Link to="/Form">Form</Link>
        </li>
      </ul> 

      <hr />

      <Switch>
        <Route exact path="/parameter" component={Counters} />
        <Route path="/SubRoutes" component={RouteConfigExample} />
        <Route path="/API" component={ApiCall} />
        <Route path="/LifeCycle" component={LifeCycle} />
        <Route path="/Form" component={Form} />
        <Route component={NoMatch} />
      </Switch>
      */}
      </div>
    </Router>
  );
};

export default RouteConfig;
