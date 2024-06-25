import React from "react";
import videojs from "video.js";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoie1widXNlcl9pZFwiOlwiNjRiMTEzMmU1YjQ0ZTkzYjhlNTQyOTdhXCIsXCJ1c2VyX3R5cGVcIjpcInVzZXJcIn0iLCJpYXQiOjE3MTg4NjM2NzYsImV4cCI6MTcyMTQ1NTY3Nn0.JZ3eWatNwffu54SYqoq0xhHdzrclFSYUAVOQ9Tm1yZU";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onVideoEnded = this.onVideoEnded.bind(this);
  }

  componentDidMount() {
    return this.onVideoEnded();
    this.player = videojs(this.videoNode);
    this.player.on("ended", this.onVideoEnded);
  }

  onVideoEnded() {
    if (TOKEN) {
      localStorage.setItem("token", TOKEN);
      return this.props.router.replace("/home");
    }
    return this.props.router.replace("/login");
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
          <source src="assets/videos/splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}
