import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      randomColor : "#c1c1c1",
    }
  }

  genRandomColor = () => {
    return (
      "rgb(" + 
        Math.floor(Math.random() * 256) + "," + 
        Math.floor(Math.random() * 256) + "," + 
        Math.floor(Math.random() * 256) + ")" 
    );
  }

  buttonPress = () => {
    this.setState({randomColor : this.genRandomColor()})
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor : this.state.randomColor}]}>
        <TouchableOpacity
          onPress = {this.buttonPress}
          style = {[styles.bt, {backgroundColor : this.state.randomColor}]}>
          <Text style = {styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bt : {
    paddingHorizontal : 40,
    paddingVertical : 10,
    backgroundColor : "#c1c1c1",
    borderRadius : 10,
    borderColor : "#FFFFFF",
    borderWidth : 2,
  },
  text : {
    fontSize : 20,
    color : "#FFFFFF"
  }
});
