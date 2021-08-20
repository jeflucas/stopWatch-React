import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bulma/css/bulma.min.css";

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

      if (this.state.second === 60) {
        this.setState((prevState) => {
          return {
            minute: prevState.minute + 1,
            second: 0,
          };
        });
      }

      if (this.state.minute === 60) {
        this.setState((prevState) => {
          return {
            hour: prevState.hour + 1,
            minute: 0,
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
      <div className="container is-max-desktop is-flex is-justify-content-center">
        <div class="notification">
          <Header />
          <Timer time={this.state} />
          <Action
            handleStart={this.handleStart}
            handleReset={this.handleReset}
            handleStop={this.handleStop}
          />
        </div>
      </div>
    );
  }
}

const Timer = (props) => {
  return (
    <div class="is-flex is-justify-content-space-evenly is-align-content-center is-align-items-center">
      <div class="time">{props.time.hour}</div>
      <div class="time">{props.time.minute}</div>
      <div class="time">{props.time.second}</div>
      <div class="time">{props.time.milisecond}</div>
    </div>
  );
};

const Action = (props) => {
  return (
    <div className="buttons has-addons is-centered">
      <button class="button is-warning" onClick={props.handleReset}>Reset</button>
      <button class="button is-primary" onClick={props.handleStart}>Start</button>
      <button class="button is-danger" onClick={props.handleStop}>Stop</button>
    </div>
  );
};

export default App;
