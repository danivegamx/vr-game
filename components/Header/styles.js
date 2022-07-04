import {
  StyleSheet,
} from 'react-360';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 130,
    width: '93%',
  },
  health: {
    height: 15,
    position: 'absolute',
    top: 5,
    left: 5,
    fontWeight: 'bold',
  },
  healthLabel: {
    color: 'white',
    position: 'absolute',
    bottom: -30,
    left: 0,
  },
  healthBarWrapper: {
    borderWidth: 2,
    borderColor: '#6ab04c',
    width: 270,
    height: 30,
    position: 'absolute',
    top: 20,
    left: 90,
  },
  logoBox: {
    top: 0,
  },
  logo: {
    width: 250,
    height: 60,
  },
  newGameButton: {
    backgroundColor: 'rgba(252, 66, 123,1.0)',
    color: 'white',
    right: 90,
    top: 10,
    position: 'absolute',
    padding: 7,
  },
  statusBarWrapper: {
    width: 370,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  statusPairsLabel: {
    top: 7,
    color: 'white',
    fontSize: 30,
  },
  text: {
    color: 'black',
  },
});

export default styles;
