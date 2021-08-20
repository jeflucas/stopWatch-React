function handleReset(){
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0,
        milisecond: 0,
      };
    });
  };

export default handleReset