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
      dealer: { hand: [], handTotal: 0, isBust: false, isWinner: false },
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

  hit = (id) => {
    let newHand = this.state.players[id].hand;
    const newCard = deck[Math.floor(Math.random() * deck.length)];
    newHand.push(newCard);

    let newState = this.state;
    newState.players[id].hand = newHand;
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
    this.setState((prevState) => {
      const player = prevState.players[id];
      // Check that bet is not too much..
      if (player.bet + value >= player.balance) return;
      else if (player.bet + value <= player.balance) {
        let newState = prevState;

        // Not sure why this does this..
        // Something about rendering
        newState.players[id].bet = player.bet + value / 2;
        return newState;
      }
    });
  };

  // Counts cards of a player
  countCards = (id) => {
    const player = this.state.players[id];
    const hand = player.hand;
    let total = 0;

    hand.forEach((card) => {
      if (card.value == "Q" || card.value == "K" || card.value == "J")
        total = total + 10;
      else if (card.value == "A") {
        if (total + 11 > 21) {
          total = total + 1;
        } else {
          total = total + 11;
        }
      } else total = total + card.value;
    });

    let newState = this.state;
    newState.players[id].handTotal = total;

    if (total > 21) {
      newState.players[id].isBust = true;
      newState.players[id].balance = player.balance - player.bet;
    }

    this.setState({ players: newState.players });
  };

  // Handles counting the dealers carddss
  dealerCount = () => {
    const dealer = this.state.dealer;
    const hand = dealer.hand;
    let newDealer = dealer;
    let total = 0;

    hand.forEach((card) => {
      if (card.value == "Q" || card.value == "K" || card.value == "J")
        total = total + 10;
      else if (card.value == "A") {
        if (total + 11 > 21) {
          total = total + 1;
        } else {
          total = total + 11;
        }
      } else total = total + card.value;
    });
    newDealer.handTotal = total;
    // Check if the dealer is bust
    if (newDealer.handTotal > 21) newDealer.isBust = true;

    this.setState({ dealer: newDealer });
  };

  // handles giving cards to the dealer
  dealerHit = () => {
    let newHand = this.state.dealer.hand;
    const newCard = deck[Math.floor(Math.random() * deck.length)];
    newHand.push(newCard);

    let newState = this.state;
    newState.dealer.hand = newHand;
    this.setState({ dealer: newState.dealer });
    this.dealerCount();
  };

  dealerRound = () => {
    while (this.state.dealer.handTotal <= 18) {
      this.dealerHit();
    }
  };

  reset = () => {
    let players = this.state.players;
    let dealer = this.state.dealer;

    players.forEach((player) => {
      player.hand = [];
      player.isStick = false;
      player.isBust = false;
      player.bet = 0;
      player.isWinner = false;
      player.handTotal = 0;
    });

    dealer.hand = [];
    dealer.isBust = false;
    dealer.isWinner = false;
    dealer.handTotal = false;

    this.setState({
      dealer: dealer,
      players: players,
      roundInProgress: true,
    });
  };

  playRound = () => {
    let players = this.state.players;

    // An array of the players who have the highest value
    let winningIds = [];

    // Find what the highest value is
    // prettier-ignore
    const highestValue = Math.max.apply(Math, players.map((player) => {
      if(!player.isBust) return player.handTotal
      else return 0;
    }))

    // Play the dealer
    this.dealerRound();

    let dealer = this.state.dealer;
    console.log(dealer);

    // Find the winning ID's
    players.forEach((player) => {
      if (player.handTotal > dealer.handTotal) winningIds.push(player.id);
    });

    // Check if the dealer wins
    if (dealer.handTotal > highestValue) {
      dealer.isWinner = true;
      this.setState({ dealer: dealer });
    } else if (dealer.handTotal == highestValue) {
    } else if (winningIds.length) {
      // Found a winner
      players.forEach((player) => {
        if (winningIds.includes(player.id)) {
          player.isWinner = true;
        }
      });
    }

    this.calculateBalances();
    this.setState({ roundInProgress: false });
  };

  calculateBalances = () => {
    let { players, dealer } = this.state;

    console.log(players);
    // Find winners
    players.forEach((player) => {
      // Blackjack 3:1 and otherwise 2:1, apparently
      if (player.isWinner && player.handTotal == 21)
        player.balance = player.balance + player.bet * 3;
      else if (player.isWinner) {
        player.balance = player.balance + player.bet * 2;
      } else if (player.isWinner == false) {
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
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
