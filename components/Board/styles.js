import {
  StyleSheet,
} from 'react-360';

const styles = StyleSheet.create({
  board: {
    width: '80%',
    height: 440,
    position: 'absolute',
    top: 130,
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
    width: '90%',
    height: '90%',
    backgroundColor: '#dfe6e9',
    borderRadius: 5,
    position: 'relative',
  },
  cardImg: {
    width: 40,
    height: 50,
    position: 'absolute',
    left: '50%',
    marginLeft: -20,
    top: 22,
  },
  cardImgIcon: {
    width: 80,
    height: 96,
    position: 'absolute',
    left: '50%',
    marginLeft: -40,
    top: 0,
  },
});

export default styles;
