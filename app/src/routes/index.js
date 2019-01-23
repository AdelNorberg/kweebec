import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Recovery from "../components/auth/Recovery/";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/recovery" component={Recovery} />
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
