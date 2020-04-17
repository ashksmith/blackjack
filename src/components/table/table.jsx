import React from "react";

import Player from "../player/player";

import "./table.scss";
import deck from "../../deck";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [1],
    };
  }

  render() {
    return (
      <div className="table-container">
        <h1 style={{ textAlign: "center" }}>♣ ♦ Blackjack ♥ ♠</h1>
        <div className="play-area">
          <div className="dealer-container">
            <Player dealer="true" />
          </div>
          <div className="players-container">
            {this.state.players.map((player, index) => (
              <div></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
