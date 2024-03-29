import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Icon from './components/Icon/Icon';
import Icons from './Icons.json';


const shuffle = (array) => {
  let counter = array.length;
  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};


class App extends Component {

  
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };

  componentDidMount() {
    this.setState({result: "Click a character to get started"})
  }
  clickedPlayer = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.reset();
    }
  }
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if (score === this.state.Icons.length) {
      this.setState({
        result: "Winner!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "New high score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "You got this!"
      });
    }
    this.resetIcon();
  }


  reset = () => {
    this.setState({
      points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "GAME OVER",
      clicked: [],
      gameOver: true
    });
    window.location.reload()
  }


  resetIcon = () => {
    let newScramble = shuffle(Icons);
    this.setState({Icons: newScramble})
  }

  render() {
    return (
      <>
        <NavBar />
        <Banner topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
        <div className='main'>
        {this.state.Icons.map(icon => (
          <Icon
            id={icon.id}
            image={icon.image}
            clickedPlayer={this.clickedPlayer}
          />
        ))}
        </div>
      </>
    );
  }
}

export default App;