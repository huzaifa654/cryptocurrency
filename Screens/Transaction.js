import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Header from '../constants/components/Header';
import {COLORS, FONTS, icons} from '../constants';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Ether from '../constants/components/Ether';
// import CustomButton from '../constants/components/CustomButton';
import TransictionHistory from '../constants/components/TransictionHistory';
import History from '../constants/components/History';

export default function Transaction({route, navigation}) {
  const {coinData} = route.params;

  return (
    <View style={{}}>
      <Header />
      <ScrollView>
        <TransictionHistory route={route} />
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
          <View style={{}}>
            <FlatList
              data={coinData.transactionHistory}
              key={item => item.id}
              showsVerticalScrollIndicator={true}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(13),
    marginHorizontal: scale(10),
    padding: verticalScale(15),
    marginBottom: 122,

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
      marginBottom: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 222,

    elevation: 8,
  },
});
