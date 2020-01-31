import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import MainPageComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router>
              <Route path="/main">
                <MainPageComponent />
              </Route>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
