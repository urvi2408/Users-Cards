import React from "react";
import './Cards.css';
function Card(props){

    return(
    <>
      <div className='cards'>
        <div className='card'>
          <div className="info">
             <img src={props.img} className="img"/><br/>
             <label className="name">Username:{props.name}</label><br/>
             <label className="email">E-mail:{props.email}</label><br/>
             <label className="number">Ph_No:{props.number}</label>
          </div>
        </div>
      </div>
    </>
    );
}

 export default Card;