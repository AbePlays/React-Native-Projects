import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import CameraScreen from './screens/CameraScreen';

const nav = createStackNavigator(
  {
    Home : {screen : Home},
    CameraScreen : {screen : CameraScreen}
  },
  {
    defaultNavigationOptions : {
      headerTintColor : '#fff',
      headerStyle : {
        backgroundColor : '#A3586D'
      },
      headerTitleStyle : {
        color : "#fff"
      }
    }
  }
);

export default createAppContainer(nav);