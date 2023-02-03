import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icons from '../icons';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../theme';
import {useNavigation} from '@react-navigation/native';

export default function Header({star}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.container}>
        <Image source={icons.back_arrow} style={styles.iconstyle} />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            fontWeight: '900',
            marginLeft: scale(13),
          }}>
          Back
        </Text>

        <>{star && <Image source={icons.star} style={styles.star} />}</>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: verticalScale(43),
    alignItems: 'center',
    paddingBottom: 18,
  },
  iconstyle: {
    width: scale(15),
    height: verticalScale(15),
    tintColor: COLORS.gray,
    marginLeft: scale(13),
    aspectRatio: 1 / 1,
  },
  star: {
    width: scale(25),
    height: verticalScale(25),
    aspectRatio: 1 / 1,
    marginLeft: scale(240),
  },
});
