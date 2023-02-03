import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {COLORS, FONTS, icons} from '../constants';

import Home from '../Screens/Home';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Transaction from '../Screens/Transaction';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: verticalScale(70),
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: scale(30),
                  height: verticalScale(30),
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.pie_chart}
                resizeMode="contain"
                style={{
                  width: scale(30),
                  height: verticalScale(30),
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                PORTFOLIO
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transiction"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              style={{
                top: verticalScale(-30),
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow,
                borderRadius: 100,
                backgroundColor: COLORS.secondary,
                padding: moderateScale(15),
                aspectRatio: 1 / 1,
              }}>
              <Image
                source={icons.transaction}
                resizeMode="contain"
                style={{
                  width: scale(30),
                  height: verticalScale(30),
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.line_graph}
                resizeMode="contain"
                style={{
                  width: scale(30),
                  height: verticalScale(30),
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                PRICES
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Transaction}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{
                  width: scale(30),
                  height: verticalScale(30),
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
