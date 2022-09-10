import { Component } from "react";

import SingleNews from "./SingleNews";
import Spinner from "../Spinner";

import { getData } from "../../API/NewsApi";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: false };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const articles = await getData(
      `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=6ed095253ccf40b5a6301052fa917b7a`
    );
    this.setState({ items: articles });
    this.setState({ loading: false });
  }

  renderNews() {
    return this.state.items.map((sNew) => (
      <SingleNews key={sNew.url} item={sNew} />
    ));
  }

  render() {
    const loading = this.state.loading;
    return (
      <div className="container">
        {loading ? <Spinner /> : <div className="row">{this.renderNews()}</div>}
      </div>
    );
  }
}

export default News;
