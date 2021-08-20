import React, { Component } from "react";
import handleStart from "./functionStart";
import handleStop from "./functionStop";
import handleReset from "./functionReset";

class Action extends Component {
    constructor(){
        super()
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
        <button onClick={handleReset()}>Reset</button>
        <button onClick={handleStart()}>Start</button>
        <button onClick={handleStop()}>Stop</button>
      </div>
    );
  }
}

export default Action;
