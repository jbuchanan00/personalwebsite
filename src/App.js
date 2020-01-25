import React from 'react';
import './App.css';
import './Resume-12.5.19.pdf';
  console.log("Github Link")
  window.open("https://github.com/jbuchanan00")
}
function ResumeLink(){
  console.log("Resume button")
}
function LinkedInLink(){
  console.log("Linkedin Link")
  window.open("https://linkedin.com/in/joshua-g-buchanan")
}

  return (
    <div className="App">
      <div className="MaxScreen">
        <header className="App-header">
          <h1 className="HeaderName">
            Josh Buchanan
          </h1>
        </header>
        <div className="NonHeaderCont">
          <summary className="InfoContainer">
            <div className="ProfOrPers">
              Professional or Personal 
            </div>
            <p className="TextContainer">
            </p>
          </summary>
        </div>
          <footer className="LinkContainer">
            <button onClick = {e => GithubLink()}>
              GitHub
            </button>
            <button onClick = {e => ResumeLink()}>
              Resume 
            </button>
            <button onClick = {e => LinkedInLink()}>
              LinkedIn
            </button>
          </footer>
      </div>
    </div>
  );
}

export default App;
