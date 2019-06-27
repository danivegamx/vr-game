import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-360';

import Header from './components/Header';
import Board from './components/Board';

const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 780,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  wrapperTexture: {
    position: 'absolute',
    width: 1000,
    height: 780,
    top: 0,
    left: 0,
  },
});

class VrMemoryGame extends Component {
  state = {
    startGame: false,
    gameOver: false,
    wonGame: false,
    attempts: 0,
    pairsCompleted: 0,
  }

  resetGame = () => this.setState({
    wonGame: true,
    gameOver: false,
    startGame: false,
    attempts: 0,
    pairsCompleted: 0,
  });

  triggerGameOver = () => this.setState({
    gameOver: true,
    startGame: false,
  });

  initiateGame = () => this.setState({
    startGame: true,
  });

  reshuffle = () => this.setState({
    wonGame: false,
    startGame: true,
    attempts: 0,
    pairsCompleted: 0,
  });

  quit = () => this.setState({
    wonGame: false,
    startGame: false,
    attempts: 0,
    pairsCompleted: 0,
  });

  addAttempt = () => {
    const { attempts } = this.state;
    if (attempts < 4) {
      this.setState({ attempts: attempts + 1 });
    } else {
      this.resetGame();
    }
  }

  addCompletedPair = () => {
    const { pairsCompleted } = this.state;
    this.setState({ pairsCompleted: pairsCompleted + 1 });
  }

  render() {
    const {
      pairsCompleted,
      attempts,
      gameOver,
      startGame,
      wonGame,
    } = this.state;
    return (
      <View style={styles.wrapper}>
        <Header
          gameOver={gameOver}
          pairsCompleted={pairsCompleted}
          attempts={attempts}
          triggerGameOver={this.triggerGameOver}
          resetGame={this.resetGame}
        />
        {
          !gameOver ? (
            <Board
              startGame={startGame}
              wonGame={wonGame}
              gameOver={gameOver}
              resetGame={this.resetGame}
              addAttempt={this.addAttempt}
              addCompletedPair={this.addCompletedPair}
            />
          ) : (
            <View>
              <Text>Game Over</Text>
            </View>
          )
        }
      </View>
    );
  }
}

export default VrMemoryGame;

AppRegistry.registerComponent('VrMemoryGame', () => VrMemoryGame);
