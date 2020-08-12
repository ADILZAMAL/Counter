import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  handleOnReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleOnIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handelOnDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Navbar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleOnIncrement}
            onDelete={this.handelOnDelete}
            onReset={this.handleOnReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
