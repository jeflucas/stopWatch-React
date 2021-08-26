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
        <div className="notification" style={{ marginTop: "100px" }}>
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
    <div className="is-flex is-justify-content-space-evenly">
      <div className="time has-text-centered">{props.time.hour}</div>
      <div className="time has-text-centered">{props.time.minute}</div>
      <div className="time has-text-centered">{props.time.second}</div>
      <div className="time has-text-centered">{props.time.milisecond}</div>
    </div>
  );
};

const Action = (props) => {
  return (
    <div className="buttons has-addons is-centered pt-4">
      <button className="button is-warning" onClick={props.handleReset}>
        Reset
      </button>
      <button className="button is-primary" onClick={props.handleStart}>
        Start
      </button>
      <button className="button is-danger" onClick={props.handleStop}>
        Stop
      </button>
    </div>
  );
};

export default App;
