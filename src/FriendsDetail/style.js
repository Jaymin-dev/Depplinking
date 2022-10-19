import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  normalFontScale,
  verticalScale,
} from '../Core/basicStyles';

const style = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    height: 40,
  },
  wrapper: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 0.4,
    shadowOpacity: 0.8,
    backgroundColor: 'red',
  },
  text: {fontSize: 15, fontWeight: '400'},
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
});

export default style;
