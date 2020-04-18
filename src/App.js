import React from "react";
import "./App.css";
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
