import {StyleSheet, View, Animated, FlatList} from 'react-native';
import {React, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS, SIZES} from '../theme';
import Ether from './Ether';
import {
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from 'victory-native';

import {VictoryCustomTheme} from '../../styles';
// import {chartOptions} from '../dummy';
import ButtonText from './ButtonText';
import Graph from './Graph';
import BuyWallet from './BuyWallet';
const chartOptions = [
  {
    id: 1,
    label: '1 hr',
  },
  {
    id: 2,
    label: '3 Days',
  },
  {
    id: 3,
    label: '1 Week',
  },
  {
    id: 4,
    label: '1 Month',
  },
  {
    id: 5,
    label: '3 Months',
  },
];
export default function RenderChart({
  route,
  activeTab,
  setActiveTab,
  activeDot,
  setActiveDot,
}) {
  const {coinData} = route.params;
  const Scrollx = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  return (
    <View
      style={{
        marginTop: verticalScale(3),
        backgroundColor: COLORS.white,
        marginHorizontal: scale(8),
        // flexDirection: 'row',
        borderRadius: moderateScale(7),
        ...styles.shadow,
      }}>
      <Ether route={route} />
      <Graph
        route={route}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeDot={activeDot}
        setActiveDot={setActiveDot}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(23),
    backgroundColor: COLORS.white,
    marginHorizontal: scale(10),
    // flexDirection: 'row',
    borderRadius: moderateScale(7),
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
