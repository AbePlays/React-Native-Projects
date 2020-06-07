import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Permissions } from 'expo';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'

export default class CameraScreen extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission : null,
      type : Camera.Constants.Type.back,
      isFlashLightOn : Camera.Constants.FlashMode.off
    }
  }

  static navigationOption = {
    title : 'CameraScreen'
  }

  async componentDidMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission : status === 'granted'
    })
  }

  flipCamera = () => {
    this.setState({
      type : this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back 
    })
  }

  flashLight = () => {
    this.setState({
      isFlashLightOn : this.state.isFlashLightOn === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off
    })
  }

  takePicture = async () => {
    if(this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.props.navigation.navigate("Home", {photo : photo});
    }
  }

  render(){

    const {hasCameraPermission} = this.state;

    if(hasCameraPermission === null) {
      return (<View></View>)
    } else if(hasCameraPermission === false) {
      return (<View>
        <Text>No Access To Camera</Text>
      </View>)
    } else if(hasCameraPermission === true){
      return (
        <View style={styles.container}>
          <Camera
          style = {styles.cameraView}
          type = {this.state.type}
          FlashMode = {this.state.isFlashLightOn}
          ref = { ref => {
            this.camera = ref;
          }}
          >
          <View style = {styles.actionContainer}>
            <TouchableOpacity style = {styles.iconHolder}
            onPress = {() => {this.flipCamera()}}>
              <FontAwesome
              name = "camera"
              size = {30}
              style = {styles.icon}>
              </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconHolder}
            onPress = {() => {this.takePicture()}}>
              <FontAwesome
              name = "circle"
              size = {30}
              style = {styles.icon}>
              </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.iconHolder}
            onPress = {() => {this.flashLight()}}>
              <FontAwesome
              name = "flash"
              size = {30}
              style = {styles.icon}>
              </FontAwesome>
            </TouchableOpacity>
          </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView : {
    flex : 1
  },
  actionContainer : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : 'transparent'
  },
  iconHolder : {
    flex : 1,
    alignItems : 'center',
    alignSelf : 'flex-end'
  },
  icon : {
    marginBottom : 10,
    color : '#fff'
  }
});
