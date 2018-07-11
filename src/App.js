import React, { Component } from 'react';
import NavComponent from './components/NavComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Blogger</h2>
        </div>
        <NavComponent />
      </div>
    );
  }
}

export default App;
