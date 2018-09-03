import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import Detail from "./components/Detail";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/AddItem/" component={AddItem} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 