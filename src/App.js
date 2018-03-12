import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import '@progress/kendo-theme-default/dist/all.css';

import GridContainer from './containers/GridContainer';
import JQueryDataTable from './components/JQueryDataTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
            <div>
                <Link to="/GridContainer">Kendo UI JQuery Grid for React</Link>
                <Link to="/jquery-datatable">JQuery DataTable</Link>

                <Route path="/GridContainer" component={GridContainer}/>
                <Route path="/jquery-datatable" component={JQueryDataTable}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
