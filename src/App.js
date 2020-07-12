import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import API from "../src/utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({
        employees: res.data.results,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
