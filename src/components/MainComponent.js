import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Redirect, Switch, Route } from 'react-router-dom';
import About from './AboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }

    }
    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }


    render() {
        const DishWithId = ({ match }) => {
            return (

                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

            )
        }
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        return (

            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders}/>}/>
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                {/* <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />
                <Dishdetail 
                dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} /> */}
                {/* here the dishid is used to know which is being refered to */}
                {/* the menu is added here and the dishes is mounted here itself so state is used else props was used */}
                {/* the menu component is now made in the menuComponent.js
                 file */}
                <Footer />

            </div>
        );
    }
}
export default Main;
