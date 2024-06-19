import React from "react";
import { Link } from "react-router";
import { Focusable, VerticalList } from "react-key-navigation";

class ToogleItem extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Focusable
        onFocus={() => this.setState({ active: true })}
        onBlur={() => this.setState({ active: false })}
      >
        <div class={"item " + (this.state.active ? "item-focus" : "")}>
          <img src={this.props.icon} /> {this.props.children}
        </div>
      </Focusable>
    );
  }
}

export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  setActive(status) {
    this.setState({ active: status });
  }

  render() {
    return (
      <div id="sidebar" class={this.state.active ? "focused" : ""}>
        <div id="icons">
          <div>
            <img src="/src/assets/icons/home.svg" />
          </div>
          <div>
            <img src="/src/assets/icons/news.svg" />
          </div>
          <div>
            <img src="/src/assets/icons/tv.svg" />
          </div>
          <div>
            <img src="/src/assets/icons/fm.svg" />
          </div>
          <div>
            <img src="/src/assets/icons/podcast.svg" />
          </div>
          <div>
            <img src="/src/assets/icons/settings.svg" />
          </div>
        </div>
        <div id="menu">
          <VerticalList
            onFocus={() => this.setActive(true)}
            onBlur={() => this.setActive(false)}
            focusId="sidebar"
            retainLastFocus={true}
          >
            <ToogleItem icon="/src/assets/icons/home.svg">Home</ToogleItem>
            <ToogleItem icon="/src/assets/icons/news.svg">News</ToogleItem>
            <ToogleItem icon="/src/assets/icons/tv.svg">TV</ToogleItem>
            <ToogleItem icon="/src/assets/icons/fm.svg">FM</ToogleItem>
            <ToogleItem icon="/src/assets/icons/podcast.svg">
              Podcast
            </ToogleItem>
            <ToogleItem icon="/src/assets/icons/settings.svg">
              Settings
            </ToogleItem>
          </VerticalList>
        </div>
      </div>
    );
  }
}
