import React from "react";
import Navigation from "react-key-navigation";

import Home from "./pages/Home.js";
import Layout from "./components/Layout.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navigation>
        <Layout>
          <Home />
        </Layout>
      </Navigation>
    );
  }
}

export default App;
