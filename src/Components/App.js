import { Component } from "react";

import News from "./News/News";
import SideNews from "./News/SideNews";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: { type: "top-headlines", query: "sources=bbc-news" },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
      news3: { type: "everything", query: "domains=comicbookmovie.com" },
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav className="grey darken-4">
            <div className="nav-wrapper center-align">
              <a href="/" className="brand-logo">
                Recent News
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
