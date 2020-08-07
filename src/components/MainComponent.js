import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import { DISHES } from '../shared.js/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />
                <Dishdetail 
                dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />
                {/* here the dishid is used to know which is being refered to */}
                {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
                {/* the menu component is now made in the menuComponent.js file */}

            </div>
        );
    }
}
export default Main;
