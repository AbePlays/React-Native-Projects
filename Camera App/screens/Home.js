import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends React.Component{

  static navigationOption = {
    title : 'PhotoClicker'
  }

  render(){

    let photo = this.props.navigation.getParam("photo", 'empty')

    return (
        <View style={styles.container}>
          <Image
          resizeMode = "center"
          style = {styles.imageHolder}
          source = {photo === 'empty' ? require('../assets/logo.png') : photo}
          ></Image>
          <Button
          title = "Take Photo"
          style = {styles.button}
          color = "#c1c1c1"
          onPress = {() => {
            this.props.navigation.navigate("CameraScreen")
          }}
          ></Button>
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
  imageHolder : {
    alignSelf : 'center',
    height : 400,
    margin : 20
  },
  button : {
  }
});
