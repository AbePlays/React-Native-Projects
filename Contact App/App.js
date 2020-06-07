import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'
 
const go = createStackNavigator(
  {
    Home : {screen : HomeScreen},
    Add : {screen : AddNewContactScreen},
    Edit : {screen : EditContactScreen},
    View : {screen : ViewContactScreen},
  },
  {
    defaultNavigationOptions : {
      headerTintColor : "#fff",
      headerStyle : {
        backgroundColor : "#236587"
      },
      headerTitleStyle : {
        color : "#fff"
      }
    }
  }
)

export default createAppContainer(go);