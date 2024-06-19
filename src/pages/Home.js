import React from "react";
import { VerticalList } from "react-key-navigation";

import Banner from "../components/Banner.js";
import List from "../components/List.js";
import { getHomeContent } from "../services/api.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      data: [],
    };
  }

  componentDidMount() {
    getHomeContent()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log("error: ", err));
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
          {this.state.data.length !== 0 &&
            this.state.data[0].category.map((list, i) => (
              <List
                key={list._id}
                title={list.name}
                content={list.content}
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
