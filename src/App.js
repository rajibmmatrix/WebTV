import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import Layout from "./components/Layout.js";

import Splash from "./pages/Splash.js";
import Login from "./pages/auth/Login.js";
import Verification from "./pages/auth/Verification.js";

import Home from "./pages/Home.js";
import News from "./pages/News.js";
import Details from "./pages/Details.js";
import Players from "./pages/Players.js";
import More from "./pages/More.js";
import Profile from "./pages/settings/Profile.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" exact component={Splash} />
        <Route path="/login" exact component={Login} />
        <Route path="/verification" exact component={Verification} />
        <Route path="/home" exact component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/settings" exact component={Profile} />
        </Route>
        <Route path="/details/:slug" exact component={Details} />
        <Route path="/player/:slug" exact component={Players} />
        <Route path="/more/:slug" exact component={More} />
      </Router>
    );
  }
}

export default App;
