import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import { Redirect, Switch, Route,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import About from './AboutComponent';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
  
class Main extends Component {
    constructor(props) {
        super(props);
    }
    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }


    render() {
        const DishWithId = ({ match }) => {
            return (

                <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

            )
        }
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        return (

            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>}/>
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
export default withRouter(connect(mapStateToProps)(Main));
