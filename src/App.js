import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Baby from './components/Baby';
import Birthday from './components/Birthday'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/birthday">
            <Birthday />
          </Route>
          <Route path="/">
            <Baby />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
