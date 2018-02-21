import React, { Component } from 'react';


class Brick extends Component {
    render() {
      var style = {
        left: this.props.x,
        top: this.props.y
      }
      return (
        <div>
          <div className="Brick" style={ style }></div>
        </div>
      );
    }
  }

export default Brick;