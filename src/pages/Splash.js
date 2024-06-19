import React from "react";
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Navigate,
} from "react-router";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("Splash");
    this.props.router.replace("/home");
  }

  render() {
    return (
      <div id="container">
        <video
          id="my-video"
          class="video-js"
          controls
          autoPlay
          preload="auto"
          width="1920"
          height="1080"
          data-setup="{}"
        >
          <source src="src/assets/videos/splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}
