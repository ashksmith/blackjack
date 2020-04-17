import React from "react";

import Card from "../card/card";

import "./player.scss";

class Player extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    // prettier-ignore
    const { id, balance, hand, isBust, isStick, hitFunction, stickFunction, stick, dealer } = this.props;
    const disabled = isBust || isStick ? true : false;

    return (
      <div className="player-container">
        <div className="player-controls-container">
          <div hidden={dealer}>Balance: {balance}</div>
          <div hidden={dealer}>
            <input
              disabled={disabled}
              type="button"
              value="Hit"
              onClick={() => hitFunction(id)}
              className="button-input"
            ></input>
            <input
              disabled={disabled}
              type="button"
              value="Stick"
              onClick={() => stickFunction(id)}
              className="button-input"
            ></input>
            <input
              disabled={disabled}
              type="button"
              value="Bet"
              className="button-input"
            ></input>
          </div>
        </div>
        <div className="player-cards-container">
          {hand &&
            hand.map((card, index) => (
              <Card
                key={index}
                suit={card.suit}
                value={card.value}
                index={index}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Player;
