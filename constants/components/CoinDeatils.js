import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../theme';
import images from '../images';
import {useNavigation} from '@react-navigation/native';

export default function CoinDeatils({
  currency,
  code,
  image,
  amount,
  changes,
  onPress,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.coinstyle}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={styles.imgaeStyle} />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              paddingLeft: 9,
              ...FONTS.body1,
              color: COLORS.black,
              fontSize: 20,
              fontWeight: '700',
            }}>
            {currency}
          </Text>

          <Text
            style={{
              fontSize: 12,
              marginTop: verticalScale(-4),
              marginRight: scale(33),
            }}>
            {code}
          </Text>
        </View>
      </View>
      <View style={{paddingTop: verticalScale(12)}}>
        <Text style={{...FONTS.body3, color: COLORS.black, fontWeight: 'bold'}}>
          ${amount}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: changes < 0 ? COLORS.red : COLORS.green,
            fontWeight: '900',
          }}>
          {changes}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coinstyle: {
    borderRadius: moderateScale(13),
    backgroundColor: COLORS.white,
    // padding: moderateScale(16),
    paddingVertical: verticalScale(13),
    paddingRight: scale(43),
    paddingLeft: scale(13),

    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: scale(9),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
      marginBottom: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    // zIndex: 10000,
    // position: 'absolute',
    elevation: 8,
    marginBottom: 12,
  },
  imgaeStyle: {
    width: scale(23),
    height: verticalScale(23),
    aspectRatio: 1 / 1,
    marginTop: verticalScale(7),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
