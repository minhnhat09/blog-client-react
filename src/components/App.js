import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import DetailPost from "./DetailPost";
import AddPost from "./AddPost";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/post" component={DetailPost} />
              <Route exact path="/addpost" component={AddPost} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
