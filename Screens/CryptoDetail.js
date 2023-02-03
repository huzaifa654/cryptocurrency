import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../constants/components/Header';
import {COLORS, dummyData, icons} from '../constants';
import RenderChart from '../constants/components/RenderChart';
import BuyWallet from '../constants/components/BuyWallet';
import Textt from '../constants/components/Textt';
import {verticalScale} from 'react-native-size-matters';
import Price from '../constants/components/Price';
export default function CryptoDetail({route, navigation}) {
  const {coinData} = route.params;

  const [activeTab, setActiveTab] = useState('');
  const [activeDot, setActiveDot] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Header star={true} />
      <ScrollView style={{marginBottom: verticalScale(12)}}>
        <View style={{flex: 1}}>
          <RenderChart
            route={route}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeDot={activeDot}
            setActiveDot={setActiveDot}
          />
          <BuyWallet route={route} />
          <Textt
            heading={'About ' + coinData?.currency}
            para={coinData?.description}
            color={true}
          />
          <View
            style={{
              marginBottom: verticalScale(22),
              marginTop: verticalScale(-9),
            }}>
            <Price
              heading="Set Price Alert"
              lowertext={'Get notified when your coins are moving'}
              icon1={icons.notification_color}
              icon2={icons.right_arrow}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: COLORS.secondary,

    // alignItems: 'center',
    // justifyContent: 'center',
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
