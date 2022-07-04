import React from "react";
import "./card.css";

const Card = ({image,name}) => {
  return (
    <div className="card">
      <div className="imgDiv">
        <img src={image} />
        </div>
      <p>{ name}</p>
      
    </div>
  );
};

export default Card;
