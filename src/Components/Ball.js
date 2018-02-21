import React, { Component } from 'react';

class Ball extends Component {
    render() {
      var style = {
        left: this.props.x,
        top: this.props.y,
        width: this.props.w,
        height: this.props.h, 
        borderRadius: this.props.br
      }
      return (
        <div 
            className = "Ball" 
            style = { style }
            onClick = { this.props.onClick }
        ></div>
      );
    }
}

export default Ball;