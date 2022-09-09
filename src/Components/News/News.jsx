import { Component } from "react";

import SingleNews from "./SingleNews";

class News extends Component {
  state = {};

  renderNews() {
    return this.props.items.map((sNew) => (
      <SingleNews key={sNew.id} item={sNew} />
    ));
  }

  render() {
    return <ul>{this.renderNews()}</ul>;
  }
}

export default News;
