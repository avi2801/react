import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import { DISHES } from '../shared.js/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
               <Header/>
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />
                <Dishdetail 
                dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />
                {/* here the dishid is used to know which is being refered to */}
                {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
                {/* the menu component is now made in the menuComponent.js
                 file */}
                <Footer/>

            </div>
        );
    }
}
export default Main;
