import NoMatch from "./NoMatch";
import ApiCall from "./ApiCall";
import Form from "./form";
import LifeCycle from "./lifecycle";
import Parameter from "./Parameter";
import Home from "./Home";
import { SubRouteComponent, Bus, Cart } from "./SubRouteComponent";
//To do this we should first install react-router via npm or yarn

const Routes = [
  {
    title: "Home",
    path: "/",
    component: Home
  },
  {
    title: "About",
    path: "/About",
    component: ""
  },
  {
    title: "parameter",
    path: "/parameter/:param1",
    component: Parameter
  },
  {
    title: "API",
    path: "/API",
    component: ApiCall
  },
  {
    title: "LifeCycle",
    path: "/LifeCycle",
    component: LifeCycle
  },
  {
    title: "Form",
    path: "/Form",
    component: Form
  },
  {
    title: "SubRoutes",
    path: "/SubRoutes",
    component: SubRouteComponent,
    routes: [
      {
        title: "SubRoute 1",
        path: "/SubRoutes/SubRoute1",
        component: Bus
      },
      {
        title: "SubRoute 2",
        path: "/SubRoutes/SubRoute2",
        component: Cart
      }
    ]
  }
];

export default Routes;
