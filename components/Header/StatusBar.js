import React from 'react';
import {
  View,
  Text,
  VrButton,
} from 'react-360';

import styles from './styles';

const Status = (props) => {
  const { pairsCompleted, resetGame } = props;
  return (
    <View style={styles.statusBarWrapper}>
      <Text style={styles.statusPairsLabel}>{`SCORE: ${pairsCompleted}`}</Text>
      <VrButton style={styles.newGameButton} onClick={resetGame}>
        <View>
          <Text style={styles.text}>
            NEW GAME
          </Text>
        </View>
      </VrButton>
    </View>
  );
};

export default Status;
