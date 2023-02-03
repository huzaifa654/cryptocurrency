import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import CryptoDetail from './Screens/CryptoDetail';
import Transaction from './Screens/Transaction';
import SplashScreen from 'react-native-splash-screen';
import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_bottom',
          animationDuration: 1000,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
