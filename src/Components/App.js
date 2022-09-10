import { Component } from "react";

import News from "./News/News";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: { type: "top-headlines", query: "sources=bbc-news" },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto"></div>
        </section>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;
