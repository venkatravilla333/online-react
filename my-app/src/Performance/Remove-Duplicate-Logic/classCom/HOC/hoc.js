import React from "react";



export var hoc = (OriginalComponent) => {
  class Newcomponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return <>
        <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} />
      </>;
    }
  }
  return Newcomponent
}