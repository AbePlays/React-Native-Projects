import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'
import Chat from './screens/Chat'

const go = createStackNavigator(
  {
    Home : {screen : Home},
    Chat : {screen : Chat},
  }
)

class App extends React.Component{
  render() {
    return (
      <go></go>
    );
  }
}

export default createAppContainer(go);
