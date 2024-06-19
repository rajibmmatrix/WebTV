import React from "react";
import { VerticalList } from "react-key-navigation";

import Banner from "../components/Banner.js";
import List from "../components/List.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };

    this.lists = ["Title 1", "Title 2", "Title 3", "Title 4"];
  }

  changeFocusTo(index) {
    this.setState({ active: index });
  }

  onBlurLists() {
    this.setState({ active: null });
  }

  render() {
    return (
      <VerticalList navDefault>
        <Banner />
        <VerticalList id="content" onBlur={() => this.onBlurLists()}>
          {this.lists.map((list, i) => (
            <List
              title={list}
              onFocus={() => this.changeFocusTo(i)}
              visible={
                this.state.active !== null ? i >= this.state.active : true
              }
            />
          ))}
        </VerticalList>
      </VerticalList>
    );
  }
}

export default Home;
