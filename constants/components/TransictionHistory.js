import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../theme';
import Ether from './Ether';
import CustomButton from './CustomButton';

export default function TransictionHistory({route}) {
  const {coinData} = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: moderateScale(7),
          marginHorizontal: scale(10),

          // alignItems: 'center',
          justifyContent: 'center',
          // alignItems: 'center',
          marginTop: 12,
          ...styles.shadow,
        }}>
        <Ether route={route} trans={true} />
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.black,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {coinData?.wallet.crypto} <Text style={{}}>{coinData?.code}</Text>
        </Text>

        <Text style={{textAlign: 'center', ...FONTS.body4}}>
          ${coinData?.wallet.value}
        </Text>
        <View style={{marginTop: 20}}>
          <CustomButton name={'Trade'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(13),
    marginHorizontal: scale(10),
    padding: verticalScale(15),

    marginTop: verticalScale(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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
