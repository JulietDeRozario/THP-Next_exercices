import React from "react";
import Color from "../Color";

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastColor: "red"
    };
  }

  changeColor = (color) => {
    this.setState({
      lastColor: color,
    })
  }

  render() {
    return (
      <>
        <Color changeColor = {this.changeColor} color="blue"/>
        <Color changeColor = {this.changeColor} color="green"/>
        <Color changeColor = {this.changeColor} color="yellow"/>
        <Color changeColor = {this.changeColor} color="red"/>
        <p>current color: {this.state.lastColor}</p>
      </>
    );
  }
}

export default Colors;