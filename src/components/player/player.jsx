import React from "react";

import Card from "../card/card";

import "./player.scss";

class Player extends React.Component {
  constructor() {
    super();

    this.state = {
      view: "controls",
    };
  }

  setViewBet = () => this.setState({ view: "bet" });
  setViewControls = () => this.setState({ view: "controls" });

  render() {
    const {
      id,
      balance,
      hand,
      isBust,
      isStick,
      hitFunction,
      stickFunction,
      dealer,
      betFunction,
      bet,
      isWinner,
      isLoser,
      isDraw,
      isOut,
    } = this.props;

    const view = this.state.view;
    const disabled = isBust || isStick || isOut ? true : false;
    const hasNotBet = bet < 1 ? true : false;
    const hasNoHand = hand && hand.length < 1;

    let statusText =
      hand && hand.length !== 0 && isOut
        ? "Out!"
        : isBust
        ? "Bust!"
        : isDraw
        ? "Draw!"
        : isLoser
        ? "Loser!"
        : isWinner
        ? "Winner!"
        : isStick
        ? "Stick!"
        : "";

    if (isOut) statusText = "Out!";

    return (
      <div className="player-container">
        <div className="player-controls-container">
          <div className="player-status">{statusText}</div>
          <div hidden={dealer || disabled}>
            Balance: {balance}, Bet: {bet}
          </div>
          <div hidden={dealer || disabled || view !== "bet"}>
            <input
              type="Button"
              value="Back"
              onClick={this.setViewControls}
            ></input>
            <input
              type="Button"
              value="10"
              onClick={() => betFunction(id, 10)}
            ></input>
            <input
              type="Button"
              value="20"
              onClick={() => betFunction(id, 20)}
            ></input>
            <input
              type="Button"
              value="50"
              onClick={() => betFunction(id, 50)}
            ></input>
            <input
              type="Button"
              value="100"
              onClick={() => betFunction(id, 100)}
            ></input>
          </div>

          <div hidden={dealer || disabled || view !== "controls"}>
            <input
              disabled={disabled || hasNotBet}
              type="button"
              value="Hit"
              onClick={() => hitFunction(id)}
              className={disabled || hasNotBet ? "disabled" : ""}
            ></input>
            <input
              disabled={disabled || hasNoHand}
              type="button"
              value="Stick"
              onClick={() => stickFunction(id)}
              className={disabled || hasNoHand ? "disabled" : ""}
            ></input>
            <input
              disabled={disabled || !hasNoHand}
              type="button"
              value="Bet"
              onClick={this.setViewBet}
              className={disabled || !hasNoHand ? "disabled" : ""}
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
