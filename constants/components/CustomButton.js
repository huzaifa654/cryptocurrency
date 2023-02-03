import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../theme';

export default function CustomButton({name, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          width: scale(98),
          textAlign: 'center',
          ...FONTS.h2,
          color: COLORS.white,
          fontSize: moderateScale(19),
          fontWeight: '700',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: scale(-290),
    // marginRight: 153,

    marginBottom: verticalScale(18),
    backgroundColor: COLORS.green,
    alignItems: 'center',
    marginTop: 12,
    // position: 'absolute',

    // justifyContent: ,
    // justifyContent: 'center',
    borderRadius: moderateScale(8),
    // paddingHorizontal: 50,
    paddingVertical: verticalScale(5),
    // width: 300,
    marginHorizontal: scale(12),
  },
});
