import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared.js/dishes';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      dishes:DISHES
    };
    
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
        {/* the menu component is now made in the menuComponent.js file */}

      </div>
    );
  }
}

export default App;
