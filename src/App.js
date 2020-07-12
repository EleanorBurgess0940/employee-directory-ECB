import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default App;
