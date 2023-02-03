import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../theme';

export default function History({
  description,
  date,
  amount,
  icon2,
  icon1,
  tintColor,
}) {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', left: scale(23)}}>
        <Text
          style={{
            color: amount > 0 ? COLORS.green : COLORS.black,
            ...FONTS.h3,
          }}>
          {amount}
        </Text>
      </View>

      <Image source={icon2} style={styles.arrowstyle} />

      <View style={{marginBottom: verticalScale(-3), width: '89%'}}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            fontWeight: 'bold',
            marginLeft: scale(12),
          }}>
          {description}
        </Text>

        <Text style={{color: COLORS.gray, marginLeft: scale(13)}}>{date}</Text>
      </View>
      <Image source={icon1} style={styles.iconstyle} tintColor={tintColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  arrowstyle: {
    width: scale(23),
    height: verticalScale(23),
    tintColor: COLORS.gray,
    marginRight: scale(12),
  },
  iconstyle: {
    width: scale(30),
    height: verticalScale(30),
  },
});
