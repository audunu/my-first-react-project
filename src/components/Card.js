import React from "react";
import star from '../images/star.png'

const Card = (props) => {
    console.log(props.coverImg)
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    }else if (props.location === 'Online') {
        badgeText='ONLINE'
    }

   


return (
    <div className="card-container">
        <div className='image-container'>
            <img src={props.coverImg} className='person-image'></img>
            {badgeText && <div className="status">{badgeText}</div>}
        </div>

        <div className="rating">
            <img src={star} className='star'></img>
            <div>{props.stats.rating} <span className="grey">({props.stats.reviewCount}) <sup className="grey">.</sup> {props.location} </span></div>
        </div>
        <div>
            {props.title}
        </div>
        <div>
            <span className="bold">From ${props.price}136</span> / person
        </div>

    </div>
)
}

export default Card