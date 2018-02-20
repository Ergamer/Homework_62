import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import About from "./containers/About/About"
import Contact from "./containers/Contact/Contact"
import {Switch,Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/About" exact component={About}/>
              <Route path="/Contact" exact component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
