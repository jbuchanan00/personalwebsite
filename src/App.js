import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MaxScreen">
        <header className="App-header">
          <name className="HeaderName">
            Josh Buchanan
          </name>
        </header>
        <div className="NonHeaderCont">
          <summary className="InfoContainer">
            <div className="ProfOrPers">
              Professional or Personal 
            </div>
            <strong className="TextContainer">
            </strong>
          </summary>
        </div>
          <footer className="LinkContainer">
            <a href="https://github.com/jbuchanan00">
              GitHub
            </a>
            <a href="" download="Resume 12-5-2019.docx">
              Resume 
            </a>
            <a href="">
              LinkedIn
            </a>
          </footer>
      </div>
    </div>
  );
}

export default App;
