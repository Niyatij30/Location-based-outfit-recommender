import React from "react";
import "./Card.css"; // Assuming you want to style your component with CSS

export function Card({ data }) {
  return (
    <div className="card">
      <div>
        <img src={data.link} alt="a" />
      </div>
      <div className="card-info">
      <div className="com"> {data.company} </div>
      <div className="des"> {data.baseColour + " " + data.articleType} </div>
      <div>Rs. {Math.round(data.year * 2 - Math.random(1, 100))}</div>
      </div>
    </div>
  );
}

export default Card;
