import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {React, useState, version} from 'react';
import {COLORS, FONTS} from '../theme';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function ButtonText({label, id, activeTab, onPress}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:
          activeTab == label ? COLORS.secondary : COLORS.lightGray,
        borderRadius: moderateScale(23),
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(4),
        alignItems: 'center',
        marginHorizontal: scale(5),
        marginBottom: verticalScale(18),
      }}
      onPress={onPress}>
      <Text
        style={{
          ...FONTS.h3,
          color: activeTab == label ? COLORS.white : COLORS.gray,
          textAlign: 'center',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: moderateScale(12),
  },
});
