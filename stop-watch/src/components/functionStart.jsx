
function handleStart() {
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
        this.setState((prevState) =>{
          return {
            hour: prevState.hour +1,
            minute: 0
          }
        })
      }
    }, 10);
  };

  export default handleStart
