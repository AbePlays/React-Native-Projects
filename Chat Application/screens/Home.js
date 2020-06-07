import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';

class Home extends React.Component{

  static navigationOptions = ({navigation}) => ({
    title : "Chat Room",
    headerStyle : {
      backgroundColor : "#E83350"
    },
    headerTintColor : "#fff"
  })

  state = {
    name : ""
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>User Name</Label>
          </Item>
          <Input
          autoCapitalize = 'none'
          autoCorrect = {false}
          onChangeText = {name => this.setState({name})}
          ></Input>
          <Button
          style = {{marginTop : 20}}
          full
          rounded
          success
          onPress = {() => {
            this.props.navigation.navigate("Chat", {
              name : this.state.name
            })
          }}
          >
            <Text style = {{color : "white"}}>Start Chat</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10,
    justifyContent: 'center',
    marginBottom : 100
  },
});

export default Home;
