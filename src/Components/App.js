import { Component } from "react";

import News from "./News/News";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My feed</h1>
        </header>
        <News items={items} />
      </div>
    );
  }
}

export default App;
