import React from "react";

import Card from "../card/card";

import "./player.scss";

class Player extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { id, balance, cards, bust, hit } = this.props;
    return (
      <div className="player-container">
        <div className="player-controls-container">
          <input
            type="button"
            value="Hit"
            onClick={() => this.props.hit(id)}
            className="button-input"
          ></input>

          <input type="button" value="Stick" className="button-input"></input>
        </div>
        <div className="player-cards-container">
          {this.props.hand &&
            this.props.hand.map((card, index) => (
              <Card suit={card.suit} value={card.value} index={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default Player;
