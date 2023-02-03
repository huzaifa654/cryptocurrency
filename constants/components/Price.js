import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme';
import images from '../images';
import icons from '../icons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function Price({
  heading,
  lowertext,
  icon1,
  icon2,
  tintColor,
  amount,
  supperHeading,
  header,
  money,
  description,
  date,
}) {
  return (
    <View style={styles.parentContainer}>
      {header ? (
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
            fontWeight: 'bold',
            marginBottom: verticalScale(12),
          }}>
          {supperHeading}
        </Text>
      ) : (
        <></>
      )}

      <View style={styles.container}>
        {money ? (
          <View style={{position: 'absolute', left: scale(23)}}>
            <Text style={{color: COLORS.black, ...FONTS.h3}}>{amount}</Text>
          </View>
        ) : (
          <></>
        )}
        <Image source={icon2} style={styles.arrowstyle} />

        <View style={{marginBottom: verticalScale(-3), width: '89%'}}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              fontWeight: 'bold',
              marginLeft: scale(12),
            }}>
            {heading}
          </Text>
          {money ? (
            <Text style={{color: COLORS.gray, marginLeft: scale(13)}}>
              {date}
            </Text>
          ) : (
            <Text style={{color: COLORS.gray, marginLeft: scale(13)}}>
              {lowertext}
            </Text>
          )}
        </View>
        <Image source={icon1} style={styles.iconstyle} tintColor={tintColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowstyle: {
    width: scale(23),
    height: verticalScale(23),
    tintColor: COLORS.gray,
  },
  iconstyle: {
    width: scale(30),
    height: verticalScale(30),
  },
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
});
