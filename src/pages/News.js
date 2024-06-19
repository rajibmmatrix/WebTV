import React from "react";
import { VerticalList } from "react-key-navigation";

import Banner from "../components/Banner.js";
import List from "../components/List.js";
import { getNewsContent, getBreakingNewsContent } from "../services/api.js";

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      news: [],
      breakingNews: [],
    };
  }

  componentDidMount() {
    getNewsContent()
      .then((res) => this.setState({ news: res.data }))
      .catch((err) => console.log("error: ", err));

    getBreakingNewsContent()
      .then((res) => this.setState({ breakingNews: res.data }))
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
          {this.state.news.length !== 0 &&
            this.state.news.map((list, i) => (
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
