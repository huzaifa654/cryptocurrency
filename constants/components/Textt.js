import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme';
import {moderateScale, verticalScale} from 'react-native-size-matters';

export default function Textt({heading, para, color}) {
  return (
    <View
      style={{
        backgroundColor: color ? COLORS.white : COLORS.secondary,
        // padding: 23,
        borderRadius: moderateScale(15),
        marginTop: verticalScale(12),
        justifyContent: 'center',
        padding: moderateScale(15),
        margin: moderateScale(12),
        ...styles.shadow,
      }}>
      <Text
        style={{
          ...FONTS.h3,
          color: color ? COLORS.black : COLORS.white,
          fontWeight: 'bold',
          fontSize: moderateScale(18),
        }}>
        {heading}
      </Text>
      <Text
        style={{
          ...FONTS.body4,
          color: color ? COLORS.black : COLORS.white,
          paddingTop: 4,
        }}>
        {para}
      </Text>
      {color ? (
        <></>
      ) : (
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.green,
            textDecorationLine: 'underline',
          }}>
          Learn More
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    // padding: 23,
    borderRadius: moderateScale(15),
    marginTop: verticalScale(12),
    justifyContent: 'center',
    padding: moderateScale(15),
    margin: moderateScale(12),
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
