import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

const store=ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
          {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
          {/* the menu component is now made in the menuComponent.js file */}
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
