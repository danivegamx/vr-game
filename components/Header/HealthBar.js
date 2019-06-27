import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-360';

import styles from './styles';

export default class HealthBar extends Component {
  state = {
    remaining: 4,
  }

  static propTypes = {
    attempts: PropTypes.number.isRequired,
    triggerGameOver: PropTypes.func.isRequired,
    gameOver: PropTypes.bool.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    const { remaining } = this.state;
    const { attempts, gameOver } = nextProps;
    const { triggerGameOver } = this.props;
    const healthLabel = 25 * (remaining - attempts);
    if (healthLabel === 0 && !gameOver) {
      triggerGameOver();
    }
    return true;
  }

  render() {
    const { remaining } = this.state;
    const { attempts } = this.props;
    const health = 63.75 * (remaining - attempts);
    const healthLabel = 25 * (remaining - attempts);
    let color = '#badc58';
    if (healthLabel === 50) {
      color = '#f1c40f';
    } else if (healthLabel === 25) {
      color = '#e74c3c';
    }
    return (
      <View style={styles.healthBarWrapper}>
        <View style={[styles.health, { width: health, backgroundColor: color }]} />
        <Text style={styles.healthLabel}>{`HEALTH ${healthLabel}%`}</Text>
      </View>
    );
  }
}
