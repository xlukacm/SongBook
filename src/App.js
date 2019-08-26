import React from 'react';
import './App.css';
import Table from "./Komponenty/Table";
import Home from "./Komponenty/Choosers/Home";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Song from "./Komponenty/Choosers/Song";
import ChooserNumber from "./Komponenty/Choosers/ChooserNumber";
import SortableTbl from 'react-sort-search-table';

function App() {
  return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                  <Switch>
                      <Route path="/" component={Home}/>
                      <Route path="/home" component={Home}/>
                      <Route path="/song/:id" component={Song}/>
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
