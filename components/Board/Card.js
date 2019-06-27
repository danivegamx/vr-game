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
  // let borderStyle;
  // switch (j) {
  // case 0:
  //   borderStyle = styles.first;
  //   break;
  // case 1:
  //   borderStyle = styles.second;
  //   break;
  // case 2:
  //   borderStyle = styles.second;
  //   break;
  // case 3:
  //   borderStyle = styles.fourth;
  //   break;
  // default:
  //   borderStyle = {};
  //   break;
  // }
  return (
    <VrButton style={[styles.cardButton]} onClick={click}>
      <View>
        {
          close ? (
            <Image style={styles.cardImg} source={asset('iocs.png')} />
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
