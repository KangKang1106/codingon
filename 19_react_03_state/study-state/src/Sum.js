import React from "react";

class Sum extends React.Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </>
    );
  }
}

export default Sum;
