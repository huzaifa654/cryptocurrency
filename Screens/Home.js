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
import {COLORS, dummyData, FONTS, icons, images} from '../constants';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CoinDeatils from '../constants/components/CoinDeatils';
import {trendingCurrencies, transactionHistory} from '../constants/dummy';
import Price from '../constants/components/Price';
import Textt from '../constants/components/Textt';
import {useNavigation} from '@react-navigation/native';
import ImageBanner from '../constants/components/ImageBanner';
import History from '../constants/components/History';
import Transaction from './Transaction';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />

        <ImageBanner />

        <View style={{bottom: verticalScale(63)}}>
          <FlatList
            data={trendingCurrencies}
            key={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <CoinDeatils
                  currency={item.currency}
                  code={item.code}
                  image={item.image}
                  amount={item.amount}
                  changes={item.changes}
                  onPress={() =>
                    navigation.navigate('CryptoDetail', {coinData: item})
                  }
                />
              );
            }}
          />

          <View style={{marginBottom: 34}}>
            <Price
              heading="Set Price Alert"
              lowertext={'Get notified when your coins are moving'}
              icon1={icons.notification_color}
              icon2={icons.right_arrow}
            />
            <Textt
              heading={' Investing Safely'}
              para={
                ' Its very difficult time to an investment especially when the market is volatile.Leran how to use dollar cost averaging to your advantage'
              }
            />
            <View style={styles.parentContainer}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                  fontWeight: 'bold',
                  marginBottom: verticalScale(12),
                }}>
                Transiction History
              </Text>
              <FlatList
                data={transactionHistory}
                key={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <History
                      description={item.description}
                      image={item.image}
                      date={item.date}
                      amount={item.amount}
                      header={true}
                      money={true}
                      icon1={icons.transaction}
                      icon2={icons.right_arrow}
                      heading="Sold Ethereum"
                      tintColor={COLORS.secondary}
                      supperHeading="Transiction History"
                      onPress={() => navigation.navigate('Transaction')}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
    left: scale(33),
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
