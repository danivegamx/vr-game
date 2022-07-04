import React from 'react';
import PropTypes from 'prop-types';
import {
  VrButton,
  asset,
  View,
  Image,
} from 'react-360';

import styles from './styles';

const Card = (props) => {
  const {
    icon,
    click,
    close,
    complete,
  } = props;
  return (
    <VrButton style={[styles.cardButton]} onClick={click}>
      <View>
        {
          close ? (
            <Image style={styles.cardImg} source={asset('s.png')} />
          ) : (
            <Image style={styles.cardImgIcon} source={asset(`${icon}.png`)} />
          )
        }
      </View>
    </VrButton>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  close: PropTypes.bool.isRequired,
};

export default Card;
