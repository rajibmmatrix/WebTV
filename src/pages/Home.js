import React from "react";

import Sidebar from "../components/Sidebar.js";
import Banner from "../components/Banner.js";
import List from "../components/List.js";

import { VerticalList, HorizontalList } from "react-key-navigation";

class Home extends React.Component {
  constructor() {
    super();

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
      <div id="container">
        <HorizontalList>
          <Sidebar />
          <div class="mainbox">
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
          </div>
        </HorizontalList>
      </div>
    );
  }
}

export default Home;
