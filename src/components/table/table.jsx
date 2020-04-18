import React from "react";

import Player from "../player/player";

import "./table.scss";
import deck from "../../deck";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      roundInProgress: true, // Used to prevent re-render in life cycle methods
      players: [],
      dealer: {
        hand: [],
        handTotal: 0,
        isBust: false,
        isWinner: false,
        isLoser: false,
        isDraw: false,
      },
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
        handTotal: 0,
        balance: 1000,
        isBust: false,
        total: 0,
        id: x,
        isStick: false,
        bet: 100,
        isWinner: false,
        isLoser: false,
        isDraw: false, // Draw apparently is called a push
      });

    this.setState({ players: newPlayers });
  }

  componentDidUpdate() {
    const { players, roundInProgress } = this.state;

    // play a round if everyone is stuck or bust
    // prettier-ignore
    if (players.every((player) => player.isBust || player.isStick) && roundInProgress){ 
      this.playRound();
    }
  }

  // Gives a player a card
  hit = (id) => {
    const newCard = deck[Math.floor(Math.random() * deck.length)];
    let newState = this.state;
    newState.players[id].hand.push(newCard);

    this.setState({ players: newState.players });
    this.countCards(id);
  };

  // Handles players sticking
  stick = (id) => {
    let newState = this.state;
    newState.players[id].isStick = true;
    this.setState({ players: newState.players });
  };

  // Handles players makings
  bet = (id, value) => {
    let newState = this.state;
    const player = newState.players[id];

    if (player.bet + value > player.balance) return;
    else if (player.bet + value <= player.balance) {
      newState.players[id].bet = newState.players[id].bet + value;
      this.setState({ players: newState.players });
    }
  };

  // Counts cards of a player
  countCards = (id) => {
    const player = this.state.players[id];
    const hand = player.hand;
    let newState = this.state;
    let total = 0;

    hand.forEach((card) => {
      // Determine card values
      if (card.value === "Q" || card.value === "K" || card.value === "J") {
        total = total + 10;
      } else if (card.value === "A") {
        // Determine when Ace should be 1 or 11
        if (total + 11 > 21) {
          total = total + 1;
        } else {
          total = total + 11;
        }
      } else {
        total = total + card.value;
      }
    });

    newState.players[id].handTotal = total;

    // Check if player should bust
    if (total > 21) {
      newState.players[id].isBust = true;
      newState.handTotal = 0;
    }

    this.setState({ players: newState.players });
  };

  // Resets to base state
  reset = () => {
    let players = this.state.players;
    let dealer = this.state.dealer;

    players.forEach((player) => {
      player.hand = [];
      player.isStick = false;
      player.isBust = false;
      player.bet = 100;
      player.isWinner = false;
      player.handTotal = 0;
      player.isLoser = false;
      player.isDraw = false;
    });

    dealer.hand = [];

    dealer.isBust = false;
    dealer.isWinner = false;
    dealer.handTotal = false;
    dealer.isLoser = false;

    this.setState({
      dealer: dealer,
      players: players,
      roundInProgress: true,
    });
  };

  // Dealer plays
  dealerRound = () => {
    let newDealer = this.state.dealer;
    let total = 0;

    while (total < 18) {
      const card = deck[Math.floor(Math.random() * deck.length)];
      if (card.value === "Q" || card.value === "K" || card.value === "J") {
        total = total + 10;
      } else if (card.value === "A") {
        if (total + 11 > 21) {
          total = total + 1;
        } else {
          total = total + 11;
        }
      } else {
        total = total + card.value;
      }

      newDealer.hand.push(card);
    }

    newDealer.handTotal = total;
    if (total > 21) newDealer.isBust = true;

    this.setState({ dealer: newDealer });
  };

  playRound = () => {
    // Let the dealer play
    this.dealerRound();

    const players = this.state.players;
    const dealer = this.state.dealer;

    let newState = this.state;
    newState.roundInProgress = false;
    let winningIds = [];
    let highestPlayerHand = 0;

    players.forEach((player) => {
      if (player.handTotal > highestPlayerHand)
        highestPlayerHand = player.handTotal;
    });

    if (dealer.handTotal > highestPlayerHand) {
      newState.dealer.isWinner = true;
      players.forEach((player) => {
        newState.players[player.id].isLoser = true;
      });
    } else if (highestPlayerHand > dealer.handTotal) {
      players.forEach((player) => {
        console.log(player.handTotal < dealer.handTotal);
        if (player.handTotal > dealer.handTotal) {
          // Found a winner
          winningIds.push(player.id);
          newState.players[player.id].isWinner = true;
        } else if (player.handTotal < dealer.handTotal) {
          newState.players[player.id].isLoser = true;
        } else if (player.handTotal === dealer.handTotal) {
          newState.players[player.id].isDraw = true;
        }
      });
    }

    this.calculateBalances(newState);
  };

  calculateBalances = (newState) => {
    let { players } = newState;

    // Find winners
    players.forEach((player) => {
      // Blackjack 3:1 and otherwise 2:1, apparently
      if (player.isWinner && player.handTotal === 21)
        player.balance = player.balance + player.bet * 3;
      else if (player.isWinner) {
        player.balance = player.balance + player.bet * 2;
      } else if (player.isLoser || player.isBust) {
        player.balance = player.balance - player.bet;
      }
    });

    this.setState({ players: players });
  };

  render() {
    const dealer = this.state.dealer;

    return (
      <div className="table-container">
        <h1 style={{ textAlign: "center" }}>♣ ♦ Blackjack ♥ ♠</h1>
        <div className="play-area">
          <div className="status-area">
            <input
              hidden={this.state.roundInProgress}
              onClick={this.reset}
              type="button"
              value="Deal"
            />
            <br />
            <div hidden={!this.state.roundInProgress}></div>
          </div>

          <div className="dealer-container">
            <Player
              dealer="true"
              hand={dealer.hand}
              isBust={dealer.isBust}
              isWinner={dealer.isWinner}
              isLoser={dealer.isLoser}
              isDraw={false}
            />
          </div>
          <div className="players-container">
            {this.state.players.map((player) => (
              <Player
                id={player.id}
                isWinner={player.isWinner}
                bet={player.bet}
                key={player.id}
                hitFunction={this.hit}
                hand={player.hand}
                balance={player.balance}
                isBust={player.isBust}
                isStick={player.isStick}
                stickFunction={this.stick}
                betFunction={this.bet}
                isLoser={player.isLoser}
                isDraw={player.isDraw}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
