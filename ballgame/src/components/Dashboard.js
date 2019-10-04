import React from 'react';

import Display from './Display.js';


class Dashboard extends React.Component {
    constructor(){
    super();
    this.state = {
        strikes: 0,
        balls: 0,
        atBat: '',
    }
   
}
/* try to find a way to make the handler reusable with this 
handleScore = (type, maxNum) => {
    if (this.state[type] === maxNum) {
        this.setState({
            strikes: 0,
            balls: 0,
            atBat: ''
        })
    } else {
    this.setState({
        type: this.state[type] + 1,
    })
}
}*/
handleStrike = e => {
   if (this.state.strikes === 2) {
        this.setState({
            strikes: 0,
            balls: 0,
            atBat: ''
        })
    } else {
    this.setState({
        strikes: this.state.strikes + 1,
    })
}
} 
handleBall = e => {
    if (this.state.balls === 3) {
        this.setState({
            strikes: 0,
            balls: 0,
            atBat: ''
        })
    } else {
    this.setState({
        balls: this.state.balls + 1,
    })
}
}
handleFoul = e => {
    if (this.state.strikes === 0 || this.state.strikes === 1) {
        this.setState({
            strikes: this.state.strikes + 1
        })
    } 
}
handleSelect = e => {
    let batters = ['Ali', 'Donald Whitley', 'James Starks', 'Ricky Henderson', 'Babe Ruth', 'Micky Mantle', 'Jose Canseco', 'Alex Rodriguez'];
    let batter = batters[Math.floor(Math.random() * batters.length)]
    this.setState({
        atBat: batter
    })
    console.log(batter)
}
    render() {
        return (
            <div>
                <div>
                <button onClick={this.handleStrike}>Strike</button>
                <button onClick={this.handleBall}>Ball</button>
                <button onClick={this.handleFoul}>Foul</button>
                <button onClick={this.handleSelect}>Select new</button>
                </div>
                <Display stats={this.state} />
            </div>
        )
    }
}

export default Dashboard;