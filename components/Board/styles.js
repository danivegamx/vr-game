import {
  StyleSheet,
} from 'react-360';

const styles = StyleSheet.create({
  board: {
    width: '80%',
    height: 540,
    position: 'absolute',
    top: 230,
  },
  col: {
    flex: 1,
    paddingLeft: 15,
  },
  first: {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#262261',
  },
  second: {
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#262261',
  },
  fourth: {
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderColor: '#262261',
  },
  cardButton: {
    width: '92%',
    height: '95%',
    backgroundColor: 'rgba(25, 42, 86, 0.8)',
    position: 'relative',
  },
  cardImg: {
    width: 20,
    height: 30,
    position: 'absolute',
    left: '50%',
    marginLeft: -10,
    top: 50,
  },
  cardImgIcon: {
    width: 100,
    height: 120,
    position: 'absolute',
    left: '50%',
    marginLeft: -50,
    top: 5,
  },
});

export default styles;
