import React from 'react';
import { StyleSheet, Text, View, Keyboard, AsyncStorage, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class AddNewContactScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstName : "",
      lastName : "",
      phone : "",
      email : "",
      address : "",
    }
  }
  
  static navigationOptions = {
    title : "New Contact"
  }

  saveContact = async () => {
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.phone !== "" &&
      this.state.email !== "" &&
      this.state.address !== ""
    ) {
      var contact = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        phone : this.state.phone,
        email : this.state.email,
        address : this.state.address,
      }

      await AsyncStorage.setItem(Date.now().toString(), 
      JSON.stringify(contact)
      )
      .then(() => {
        //this.props.navigation.navigate("Home");
        this.props.navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      })

    } else {
      Alert.alert("All Fields Are Mandatory")
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
      onPress = {() => {Keyboard.dismiss}}
      >
        <ScrollView style={styles.container}>
          <Form>
            <Item style = {styles.inputItem}>
              <Label>First Name</Label>
              <Input
              autoCorrect = {false}
              autoCapitalize = "none"
              keyboardType = "default"
              onChangeText = { firstName => this.setState({firstName}) }
              ></Input>
            </Item>
            <Item style = {styles.inputItem}>
              <Label>Last Name</Label>
              <Input
              autoCorrect = {false}
              autoCapitalize = "none"
              keyboardType = "default"
              onChangeText = { lastName => this.setState({lastName}) }
              ></Input>
            </Item>
            <Item style = {styles.inputItem}>
            <Label>Phone</Label>
            <Input
            autoCorrect = {false}
            autoCapitalize = "none"
            keyboardType = "number-pad"
            onChangeText = { phone => this.setState({phone}) }
            ></Input>
          </Item>
            <Item style = {styles.inputItem}>
              <Label>Email</Label>
              <Input
              autoCorrect = {false}
              autoCapitalize = "none"
              keyboardType = "default"
              onChangeText = { email => this.setState({email}) }
              ></Input>
            </Item>
            <Item style = {styles.inputItem}>
            <Label>Address</Label>
            <Input
            autoCorrect = {false}
            autoCapitalize = "none"
            keyboardType = "default"
            onChangeText = { address => this.setState({address}) }
            ></Input>
          </Item>
          </Form>
          <Button full
          style = {styles.button}
          onPress = {() => {this.saveContact()}}
          >
          <Text style = {styles.buttonText}>Save</Text>
          </Button>
          <View style = {styles.empty}></View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    height: 500
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#236587",
    marginTop: 25
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize : 15
  },
  empty: {
    height: 500,
    backgroundColor: "#FFF"
  }
});
