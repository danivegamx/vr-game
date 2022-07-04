import React from 'react';
import {
  asset,
  View,
  Image,
} from 'react-360';

import HealthBar from './HealthBar';
import StatusBar from './StatusBar';
import styles from './styles';

const Header = (props) => {
  const {
    pairsCompleted,
    attempts,
    triggerGameOver,
    gameOver,
    resetGame,
  } = props;
  return (
    <View style={styles.header}>
      <HealthBar
        gameOver={gameOver}
        attempts={attempts}
        triggerGameOver={triggerGameOver}
      />
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={asset('ss.png')} />
      </View>
      <StatusBar
        resetGame={resetGame}
        pairsCompleted={pairsCompleted}
      />
    </View>
  );
};

export default Header;
