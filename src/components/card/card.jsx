import React from "react";
import "./card.scss";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      randomDeg:
        Math.abs(Math.random()) * 2 > 1
          ? `rotate(-${Math.random() * 6}deg)`
          : `rotate(${Math.random() * 6}5deg)`,
    };
  }

  render() {
    const { suit, value } = this.props;

    return (
      <div className="card-container">
        <div className="card" style={{ transform: this.state.randomDeg }}>
          <div
            className="card-header"
            style={{ color: suit === "♥" || suit === "♦" ? "red" : "black" }}
          >
            {suit}
            {value}
          </div>
          <div
            className="card-suit"
            style={{ color: suit === "♥" || suit === "♦" ? "red" : "black" }}
          >
            {suit}
          </div>
          <div
            className="card-footer"
            style={{ color: suit === "♥" || suit === "♦" ? "red" : "black" }}
          >
            {suit}
            {value}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
