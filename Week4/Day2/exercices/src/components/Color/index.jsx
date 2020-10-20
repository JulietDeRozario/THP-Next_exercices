import React from "react";

class Color extends React.Component {
  render() {

    let { color } = this.props.color;
    return (
      <div>
        <button onClick = {() => this.props.changeColor(this.props.color)}>{color}</button>
      </div>
    );
  }
}

export default Color;