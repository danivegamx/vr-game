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
    backgroundColor: '#dfe6e9',
    borderRadius: 5,
    position: 'relative',
  },
  cardImg: {
    width: 50,
    height: 60,
    position: 'absolute',
    left: '50%',
    marginLeft: -25,
    top: 32,
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
