import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactGA from "react-ga";

import HomePage from "Pages/Home";
import WishList from "Pages/WishList";

const App = ({ history }) => {
  useEffect(() => {
    ReactGA.pageview(history.location.pathname);
  });
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/wishlist" component={WishList} />
    </Switch>
  );
};

export default withRouter(App);
