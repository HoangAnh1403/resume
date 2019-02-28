import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import resumeData from './resumeData';
import './App.css';
import './css/layout.css';
import './css/default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Resume />
        <Portfolio />

        <Footer />
      </div>
    );
  }
}

export default App;
