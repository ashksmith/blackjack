import React from "react";
import "./card.scss";

const Card = (props) => {
  const { suit, value, index } = props;
  // Generate a random positive / negative number to scatter cards a bit
  // prettier-ignore
  const randomDeg = Math.abs(Math.random()) * 2 > 1 ? `rotate(-${Math.random() * 6}deg)` : `rotate(${Math.random() * 6}5deg)`;
  console.log(randomDeg);

  return (
    <div className="card-container">
      <div className="card" style={{ transform: randomDeg }}>
        <div
          className="card-header"
          style={{ color: suit == "♥" || suit == "♦" ? "red" : "black" }}
        >
          {suit}
          {value}
        </div>
        <div
          className="card-footer"
          style={{ color: suit == "♥" || suit == "♦" ? "red" : "black" }}
        >
          {suit}
          {value}
        </div>
      </div>
    </div>
  );
};

export default Card;
