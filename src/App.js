import React from 'react';
import './App.css';
import './Resume-12.5.19.pdf';
import ResumeViewer from "./Components/ResumeViewer";
import Landing from "./Components/Landing";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){

  return (
    <Router>
      <Switch>
        <Route path = "/Resume" component = {ResumeViewer}/>
        <Route path = "/" component = {Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
