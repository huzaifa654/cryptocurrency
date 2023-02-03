import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import images from '../images';
import {COLORS, FONTS} from '../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import icons from '../icons';
import CustomButton from './CustomButton';
import Ether from './Ether';
import dummyData from '../dummy';

export default function BuyWallet({route}) {
  const {coinData} = route.params;

  const navigation = useNavigation();
  return (
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
      <Ether route={route} />
      <CustomButton
        name={'Buy'}
        // route={route}
        onPress={() =>
          navigation.navigate('Transaction', {
            coinData,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(7),
    marginHorizontal: scale(10),

    alignItems: 'center',
    justifyContent: 'center',
  },
  imgaeStyle: {
    width: scale(23),
    height: verticalScale(23),
    aspectRatio: 1 / 1,
    marginTop: verticalScale(17),
    position: 'absolute',
    marginLeft: 12,
  },
  iconstyle: {
    width: scale(23),
    height: verticalScale(23),
    aspectRatio: 1 / 1,
    tintColor: COLORS.gray,
    marginTop: 12,
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
