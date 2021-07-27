import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon'
import Pagination from "react-js-pagination";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <div className="container">
            <switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </switch>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
