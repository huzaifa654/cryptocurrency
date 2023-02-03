import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../theme';

export default function Dot({onPress, activeDot, id}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={{
        borderRadius: moderateScale(100),
        aspectRatio: 1 / 1,
        padding: moderateScale(5),
        backgroundColor: activeDot == id ? COLORS.secondary : COLORS.lightGray,
        justifyContent: 'center',
        marginLeft: 10,

        marginBottom: 23,
      }}
      onPress={onPress}></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(100),
    aspectRatio: 1 / 1,
    padding: moderateScale(5),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    marginLeft: 13,

    marginBottom: 23,
  },
});
