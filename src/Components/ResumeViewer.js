import React from 'react';
import '../App.css'

function ResumeViewer() {
    return (
        <div className="ResumeContainer">
            <iframe className = "ResumeView" src="https://docs.google.com/document/d/e/2PACX-1vTTmW0jfJ1ejWxr621Ib0_tw0d7R40aZWFA7jlT6Qu1WAVeFUzXiRKsOfbR-5XWU87g__uSCp295R-K/pub?embedded=true">
              Resume
            </iframe>
        </div>
    );
}

export default ResumeViewer;