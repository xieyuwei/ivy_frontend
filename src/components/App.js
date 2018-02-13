import React, { Component } from 'react';
import '../assets/styles/app.css'
import '../assets/font-awesome/css/font-awesome.min.css'
import Desktop from './Desktop'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Desktop />
      </div>

    );
  }
}

export default App;
