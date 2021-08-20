import React from "react";
import "./App.css";
import Header from "./components/Header";
import Action from "./components/Action";

class App extends React.Component {
  constructor(props, timer) {
    super(props);
    this.timer = timer;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      milisecond: 0,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Timer time={this.state} />
        <Action
          handleStart={this.handleStart}
          handleReset={this.handleReset}
          handleStop={this.handleStop}
        />
      </div>
    );
  }
}

const Timer = (props) => {
  return (
    <div>
      <div>{props.time.hour}</div>,<div>{props.time.minute}</div>,
      <div>{props.time.second}</div>,<div>{props.time.milisecond}</div>
    </div>
  );
};



export default App;
