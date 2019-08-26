import React from 'react';
import './App.css';
import Table from "./Komponenty/Table";
import ChooserName from "./Komponenty/Choosers/ChooserName";
import ChooserNumber from "./Komponenty/Choosers/ChooserNumber";
import SortableTbl from 'react-sort-search-table';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
              <ChooserName/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

/*  */