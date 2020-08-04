import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }
    renderComments(comments){
        console.log(comments);
        if(comments !== null){
            const commentView = comments.map((c) => <li key={c.id}>{c.comment}<br/>{'--' + c.author}</li>)
         return(
             <div>
                 <h4>Comments</h4>  
                 <ul className = "list-unstyled">
                    {commentView}
                </ul>        
             </div>
              
    
         );
       }else{
        return(
            <div></div>
        );
    
       }
    
    }
    render() {
        return (
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.selectedDish ? this.props.selectedDish.comments : null)}
            </div>
        )

    }
}
export default Dishdetail;
