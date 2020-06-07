import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from '../Firebase'
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class Chat extends React.Component{

  static navigationOptions = ({navigation}) => ({
    title : "Chat Room",
    headerStyle : {
      backgroundColor : "#E83350"
    },
    headerTintColor : "#fff"
  })

  state = {
    messages : []
  }

  get user() {
    return {
      name : this.props.navigation.state.params.name,
      _id : Firebase.shared.uid
    }
  }

  componentDidMount() {
    Firebase.shared.on(message => 
      this.setState(previousState => ({
        messages : GiftedChat.append(previousState.messages, message)
      }))  
    )
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <GiftedChat
      messages = {this.state.messages}
      user = {this.user}
      onSend = {Firebase.shared.send}
      ></GiftedChat>
      {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
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
});
