import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import images from '../images';
import {COLORS, FONTS} from '../theme';
import {useRoute} from '@react-navigation/native';

export default function Ether({route, trans}) {
  const {coinData} = route.params;

  return (
    <View style={styles.container}>
      <Image source={coinData?.image} style={styles.imgaeStyle} />

      <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <Text
          style={{
            paddingLeft: 9,
            ...FONTS.body1,
            color: COLORS.black,
            fontSize: 20,
            fontWeight: '700',
          }}>
          {coinData?.currency}
        </Text>

        <Text
          style={{
            fontSize: 12,
            marginTop: verticalScale(-4),
            marginRight: scale(33),
          }}>
          {coinData?.code}
        </Text>
      </View>
      {trans ? (
        <></>
      ) : (
        <View style={{marginTop: moderateScale(7), marginLeft: scale(110)}}>
          <Text
            style={{...FONTS.body3, color: COLORS.black, fontWeight: 'bold'}}>
            ${coinData?.amount}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: coinData?.changes > 0 ? COLORS.green : COLORS.red,
              fontWeight: '900',
            }}>
            {coinData?.changes}%
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: scale(20),
    marginTop: verticalScale(15),
  },
  imgaeStyle: {
    width: scale(23),
    height: verticalScale(23),
    aspectRatio: 1 / 1,
    marginTop: verticalScale(7),
  },
});
