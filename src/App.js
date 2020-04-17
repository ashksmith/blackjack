import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./components/player/player";
import Table from "./components/table/table";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfPlayers: 3,
    };
  }

  render() {
    return <Table numberOfPlayers={this.state.numberOfPlayers} />;
  }
}

export default App;
