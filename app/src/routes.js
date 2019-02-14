import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./helpers/privateRoute";

import { Home } from "./views/Home";
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";
import { Recovery } from "./views/Recovery";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <PrivateRoute exact path="/home" component={Home} />
    <PrivateRoute path="/home/:something" component={Home} />
    <Route exact path="/sign_in" component={SignIn} />
    <Route exact path="/sign_up" component={SignUp} />
    <Route exact path="/recovery" component={Recovery} />
    {/* <Route path="/:WhereTheHeckIsThat" component={NoMatch} /> */}
  </Switch>
);
