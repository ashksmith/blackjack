import React from "react";

import Player from "../player/player";

import "./table.scss";
import deck from "../../deck";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentWillMount() {
    // Setting this to 1 for now
    //let numberOfPlayers = prompt("How many players are already at the table");
    let numberOfPlayers = 3;
    let players = new Array(Number(numberOfPlayers));
    let newPlayers = [];

    for (let x = 0; x < players.length; x++)
      newPlayers.push({
        hand: [],
        balance: 1000,
        isBust: false,
        total: 0,
        id: x,
        isStick: false,
      });

    this.setState({ players: newPlayers });
  }

  hit = (id) => {
    let newHand = this.state.players[id].hand;
    const newCard = deck[Math.floor(Math.random() * deck.length)];
    newHand.push(newCard);

    let newState = this.state;
    newState.players[id].hand = newHand;
    this.setState({ players: newState.players });
  };

  stick = (id) => {
    let newState = this.state;
    newState.players[id].isStick = true;
    console.log();
    this.setState({ players: newState.players });
  };

  render() {
    console.log(this.state);
    return (
      <div className="table-container">
        <h1 style={{ textAlign: "center" }}>♣ ♦ Blackjack ♥ ♠</h1>
        <div className="play-area">
          <div className="dealer-container">
            <Player dealer="true" />
          </div>
          <div className="players-container">
            {this.state.players.map((player) => (
              <Player
                id={player.id}
                key={player.id}
                hitFunction={this.hit}
                hand={player.hand}
                balance={player.balance}
                isBust={player.isBust}
                isStick={player.isStick}
                stickFunction={this.stick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
