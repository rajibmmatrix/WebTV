import React from "react";
import videojs from "video.js";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onVideoEnded = this.onVideoEnded.bind(this);
  }

  componentDidMount() {
    this.props.router.replace("/home");

    // this.player = videojs(this.videoNode);
    // this.player.on("ended", this.onVideoEnded);
  }

  onVideoEnded() {
    this.props.router.replace("/home");
  }

  render() {
    return (
      <div data-vjs-player id="container">
        <video
          ref={(node) => (this.videoNode = node)}
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
