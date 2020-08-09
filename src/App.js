import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
          {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
          {/* the menu component is now made in the menuComponent.js file */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
