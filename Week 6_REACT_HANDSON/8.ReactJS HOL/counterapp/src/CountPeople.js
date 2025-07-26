import React from "react";
import "./App.css";

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  // Method to increment entry count
  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  // Method to increment exit count
  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>People Counter</h2>
        <p>Number of People Entered: {this.state.entryCount}</p>
        <p>Number of People Exited: {this.state.exitCount}</p>

        <button
          onClick={this.UpdateEntry}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        <button
          onClick={this.UpdateExit}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Exit
        </button>
      </div>
    );
  }
}
export default CountPeople;