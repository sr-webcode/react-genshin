import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "Pages/Home";
import WishList from "Pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/wishlist" component={WishList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
