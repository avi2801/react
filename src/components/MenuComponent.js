import React from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

// the menu component starts here

// user defined functions should start with a capital letter
function RenderMenu({ dish, onClick }) {
  return (

    <Card 
      onClick={() => onClick(dish.id)}>
      {/* by the onclick method we are passing the dish id to the onclick as prop to the main */}
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}
function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenu dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}


// the code to export the menu from here into the app.js file
export default Menu;