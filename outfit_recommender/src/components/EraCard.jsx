import React from "react";
import "./EraCard.css"; // Assuming you want to style your component with CSS


export default  function EraCard({ data }) {
  return (
    <div className="card">
      
        <img src={data.Link} alt="a" />
   
      <div className="card-info">
      <div className="com"> {data.ItemName} </div>
      <div className="des"> {data.Length + " " + data.Material} </div>
      <div>Rs. {Math.round((Math.random()+1)*1000)}</div>
      </div>
    </div>
  );
}


