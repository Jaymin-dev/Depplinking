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
  titleHeaderText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(16),
    fontWeight: '200',
    marginHorizontal: horizontalScale(20),
    marginTop: horizontalScale(20),
  },
  comboInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: horizontalScale(10),
  },
  comboInputStyle: {
    width: '49%',
  },
  //
  viewInner: {
    marginTop: isIOS ? verticalScale(50) : verticalScale(30),
    paddingHorizontal: horizontalScale(20),
  },
  text: {
    fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(22),
    marginVertical: verticalScale(10),
    fontWeight: '200',
  },

  image: {
    height: horizontalScale(28),
    width: horizontalScale(28),
  },
  des: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: fontScale(15),
    width: '100%',
    marginTop: verticalScale(10),
    fontWeight: '200',
    color: brandColors.placeHolder,
  },

  labelStyle: {
    fontSize: normalFontScale(18),
    lineHeight: horizontalScale(20),
  },
  radioStyle: {
    width: '90%',
    alignSelf: 'center',
    padding: normalFontScale(10),
    backgroundColor: brandColors.inputColor,
    borderRadius: horizontalScale(10),
    marginVertical: verticalScale(15),
    zIndex: -1,
  },
  buttonView: {
    paddingVertical: verticalScale(20),
  },
  buttonText: {
    fontSize: fontScale(17),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
  buttonStyle: {
    alignItems: 'center',
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(5),
  },
  bottomText: {
    fontSize: fontScale(15),
    color: brandColors.placeHolder,
    fontFamily: 'SourceSansPro-Regular',
  },
  rightTextBottom: {
    color: brandColors.textBlackColor,
    fontSize: fontScale(17),
  },

  terms: {
    alignItems: 'center',
    paddingBottom: verticalScale(10),
  },

  textCombo: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default style;
