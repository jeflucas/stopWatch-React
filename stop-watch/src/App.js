import React from "react";
import "./App.css";

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

  handleStart = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          milisecond: prevState.milisecond + 1,
        };
      });

      if (this.state.milisecond === 100) {
        this.setState((prevState) => {
          return {
            second: prevState.second + 1,
            milisecond: 0,
          };
        });
      }
    }, 10);
  };

  handleStop = () => {
    clearInterval(this.timer);
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

const Header = () => {
  return <h1>Stopwatch</h1>;
};

const Timer = (props) => {
  return (
    <div>
      <div>{props.time.hour}</div>,<div>{props.time.minute}</div>,
      <div>{props.time.second}</div>,<div>{props.time.milisecond}</div>
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
