import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Main/>
        {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
        {/* the menu component is now made in the menuComponent.js file */}
      </div>
    );
  }
}
export default App;
