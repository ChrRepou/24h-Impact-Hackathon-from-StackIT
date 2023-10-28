import React from 'react';
import './FoodCard.css';
import StarRating from '../StarRating/StarRating';

const FoodCard = (props) => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-row">
      <img src={props.imageUrl} alt={props.title} className="card-img-top" id="food-img"/>
	  <div className='desc'>
        <h5 className="card-title">{props.title} <span className="badge badge-primary">{props.type}</span></h5>
        {/* <p className="card-text">{props.description}</p> */}
		<div className="card-price">
			<p><span className="badge badge-primary label">Price per 100g:</span></p>
			<ul>
				<li>Students: <b>{props.studentPrice}€</b></li>
				<li>Employees: <b>{props.employeePrice}€</b></li>
				<li>Guests: <b>{props.guestPrice}€</b></li>
			</ul>
		</div>
		<StarRating />
	  </div>
      </div>
    </div>
  );
};

export default FoodCard;
