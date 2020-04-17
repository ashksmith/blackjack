import React from "react";

import Card from "../card/card";

import "./player.scss";

class Player extends React.Component {
  constructor() {
    super();

    this.state = {
      hand: {
        cards: [
          { suit: "♦", value: 9 },
          { suit: "♣", value: 3 },
          { suit: "♣", value: 4 },
        ],
      },
      bust: false,
      stick: false,
    };
  }

  render() {
    return (
      <div className="player-container">
        <div className="player-controls-container">
          <input type="button" value="Hit" className="button-input"></input>
          <input type="button" value="Stick" className="button-input"></input>
        </div>
        <div className="player-cards-container">
          {this.state.hand.cards.map((card, index) => (
            <Card suit={card.suit} value={card.value} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Player;
