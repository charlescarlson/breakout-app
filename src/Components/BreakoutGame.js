import React, { Component } from 'react';
import GameBoard from "./GameBoard";
import Ball from "./Ball.js"
import Brick from "./Brick.js"
import Padlle from "./Paddle.js"

class BreakoutGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ball_x: 179,
            ball_y: 400,
            ball_w: 40,
            ball_h: 40,
            ball_br: 50,

            ball_speed_x: 1.89,
            ball_speed_y: 1.5,

            brick_1_x: 100,
            brick_1_y: 50,
            brick_2_x: 160,
            brick_2_y: 50,
            brick_3_x: 220,
            brick_3_y: 50,
            brick_4_x: 280,
            brick_4_y: 50,

            brick_5_x: 100,
            brick_5_y: 90,
            brick_6_x: 160,
            brick_6_y: 90,
            brick_7_x: 220,
            brick_7_y: 90,
            brick_8_x: 280,
            brick_8_y: 90
        }
    } 

    render() {
        return (
            <div className="BreakoutGame">
                <GameBoard/>
                <Brick
                    x = { this.state.brick_1_x }
                    y = { this.state.brick_1_y }
                />
                <Brick
                    x = { this.state.brick_2_x }
                    y = { this.state.brick_2_y }
                />
                <Brick
                    x = { this.state.brick_3_x }
                    y = { this.state.brick_3_y }
                />
                <Brick
                    x = { this.state.brick_4_x }
                    y = { this.state.brick_4_y }
                />
                <Brick
                    x = { this.state.brick_5_x }
                    y = { this.state.brick_5_y }
                />
                <Brick
                    x = { this.state.brick_6_x }
                    y = { this.state.brick_6_y }
                />
                <Brick
                    x = { this.state.brick_7_x }
                    y = { this.state.brick_7_y }
                />
                <Brick
                    x = { this.state.brick_8_x }
                    y = { this.state.brick_8_y }
                />
                <Ball
                    x = { this.state.ball_x }
                    y = { this.state.ball_y }
                    w = { this.state.ball_w }
                    h = { this.state.ball_h } 
                    br = { this.state.ball_br }
                    onClick = {() => this.updateBallPosition()}
                />
            </div>
        )
    }

    componentDidMount() {
        var gameInterval = setInterval(this.updateBallPosition.bind(this),50);
    }

    updateBallPosition() {
        if (this.state.ball_x + (this.state.ball_w/2) < 400 && this.state.ball_y + (this.state.ball_h/2)< 500) {
            this.setState({
                ball_x: this.state.ball_x + this.state.ball_speed_x,
                ball_y: this.state.ball_y + this.state.ball_speed_y
            });
        }
    }
}

export default BreakoutGame;