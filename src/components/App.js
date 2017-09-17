import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import DetailPost from "./DetailPost";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/post" component={DetailPost} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
