import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
// import {COLORS, dummyData, FONTS, icons, images} from '../constants';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {trendingCurrencies} from '../constants/dummy';

import {useNavigation} from '@react-navigation/native';
import images from '../images';
import icons from '../icons';
import {COLORS, FONTS} from '../theme';
import dummyData from '../dummy';

export default function ImageBanner() {
  return (
    <View>
      <ImageBackground
        source={images.banner}
        resizeMode={'cover'}
        style={styles.imagebg}>
        <TouchableOpacity style={{position: 'absolute', right: 13, top: 43}}>
          <Image source={icons.notification_white} style={styles.iconstyle} />
        </TouchableOpacity>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: verticalScale(-55),
          }}>
          <Text
            style={{
              color: COLORS.white,

              fontSize: moderateScale(20),
            }}>
            Your Portfolio Balance
          </Text>
          <Text
            style={{...FONTS.body1, color: COLORS.white, fontWeight: 'bold'}}>
            ${dummyData.portfolio.balance}
          </Text>
          <Text style={{...FONTS.body5, color: COLORS.white}}>
            +2.36% Last 24 hours
          </Text>
        </View>
        <View style={styles.trending}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
              fontWeight: '600',
              fontSize: 20,
            }}>
            Trending
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imagebg: {
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -9,
  },
  iconstyle: {
    width: scale(24),
    height: verticalScale(24),

    // marginTop: verticalScale(-50),
    // marginLeft: scale(300),

    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
  },
  trending: {
    position: 'absolute',
    bottom: verticalScale(69),
    left: scale(13),
  },
});
