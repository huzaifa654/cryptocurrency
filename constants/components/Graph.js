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
import Dot from './Dot';
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
const dot = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
export default function Graph({
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
    <View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        snapToInterval={SIZES.width - 40}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: Scrollx}}}],
          {useNativeDriver: false},
        )}>
        <View>
          <View style={{marginTop: -29}}>
            <VictoryChart
              theme={VictoryCustomTheme}
              height={verticalScale(225)}
              width={scale(340)}>
              <VictoryLine
                style={{
                  data: {
                    stroke: COLORS.secondary,
                  },
                  parent: {
                    border: '1px solid #ccc',
                  },
                }}
                data={coinData?.chartData}
                categories={{
                  x: ['15MIN', '30MIN', '45MIN', '60MIN'],
                  y: ['15', '30', '45'],
                }}
              />
              <VictoryScatter
                data={coinData?.chartData}
                size={7}
                style={{
                  data: {
                    fill: COLORS.secondary,
                  },
                }}
              />
              <VictoryAxis
                style={{
                  grid: {
                    stroke: 'transparent',
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: {
                    stroke: 'transparent',
                  },
                  grid: {
                    stroke: 'grey',
                  },
                }}
              />
            </VictoryChart>
          </View>
        </View>
      </Animated.ScrollView>
      <FlatList
        data={chartOptions}
        key={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ButtonText
              id={item.id}
              label={item.label}
              activeTab={activeTab}
              onPress={() => setActiveTab(item.label)}
            />
          );
        }}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={dot}
          key={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Dot
                id={item.id}
                activeDot={activeDot}
                onPress={() => setActiveDot(item.id)}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
