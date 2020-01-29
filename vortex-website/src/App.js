import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="">
              <MainComponent />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
