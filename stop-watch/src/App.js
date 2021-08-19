import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props, timmer) {
    super(props);
    this.timmer = timmer;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      milisecond: 0,
    };
  }

  handleStart = () => {
    this.setState((prevState) => {
      return {
        hour: prevState.hour + 1,
        minute: prevState.minute + 1,
        second: prevState.second + 1,
        milisecond: prevState.milisecond + 1,
      };
    });
  };

  handleStop = () => {
    clearInterval(this.timmer);
  };

  handleReset = () => {
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0,
        milisecond: 0,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Timmer />
        <Action
          handleStart={this.handleStart}
          handleReset={this.handleReset}
          handleStop={this.handleStop}
        />
      </div>
    );
  }
}

const Header = () => {
  return <h1>Stopwatch</h1>;
};

const Timmer = () => {
  return (
    <div>
      <div>0</div>,<div>0</div>,<div>0</div>,<div>0</div>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handleStart}>Start</button>
      <button onClick={props.handleStop}>Stop</button>
    </div>
  );
};

export default App;
