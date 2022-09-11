import { Component } from "react";
import { getData } from "../../API/FetchNewsApi";

import Spinner from "../SpinnerMaterialize";
import SingleSideNews from "./SingleSideNews";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = { sideNews: [], loading: false };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const articles = await getData(
      `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=6ed095253ccf40b5a6301052fa917b7a`
    );
    this.setState({ sideNews: articles });
    this.setState({ loading: false });
  }

  renderNews() {
    return this.state.sideNews.map((sNew) => (
      <SingleSideNews key={sNew.url} item={sNew} />
    ));
  }

  render() {
    const loading = this.state.loading;
    return (
      <div>
        <h3>Side News</h3>
        {loading ? <Spinner /> : <div className="row">{this.renderNews()}</div>}
      </div>
    );
  }
}

export default SideNews;
