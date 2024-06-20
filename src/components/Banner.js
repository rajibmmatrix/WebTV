import React from "react";

import { getBanners } from "../services/api";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    getBanners()
      .then(({ data }) => this.setState({ banners: data[0].data }))
      .catch((err) => console.log("error: ", err));
  }

  render() {
    return (
      <div class="banner">
        <div class="banner-slides">
          {this.state.banners.slice(0, 5).map((item) => (
            <div class="banner-slide" key={item.banner_id}>
              <img src={item.banner_image_tv} alt={item.banner_name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
