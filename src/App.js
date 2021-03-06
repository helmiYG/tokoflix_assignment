import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Ui/Navbar/Navbar'
import Home from './containers/Home/Home'
import Detail from './containers/Detail/Detail'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detail" component={Detail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
