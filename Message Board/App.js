import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { Input, Card, Icon, Button } from "native-base";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "ADD_YOUR_OWN",
  authDomain: "ADD_YOUR_OWN",
  databaseURL: "ADD_YOUR_OWN",
  projectId: "ADD_YOUR_OWN",
  storageBucket: "",
  messagingSenderId: "ADD_YOUR_OWN",
  appId: "ADD_YOUR_OWN",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: [],
    };
  }

  sendMessage = (message) => {
    var messageListRef = firebase.database().ref("message_list");
    var newMessageRef = messageListRef.push();
    newMessageRef.set({
      text: message,
      time: Date.now(),
    });
    this.setState({
      message: "",
    });
  };

  updateList = (messageList) => {
    this.setState({ messageList: messageList });
  };

  componentWillMount() {
    var self = this;

    var messageListRef = firebase.database().ref("message_list");

    messageListRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let messageList = Object.values(dataSnapshot.val());
        self.updateList(messageList.reverse());
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Message Board</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.messageList}
            inverted
            keyExtractor={(item, index) => item.time.toString()}
            renderItem={({ item }) => (
              <Card style={styles.listItem}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>
                  {new Date(item.time).toLocaleDateString}
                </Text>
              </Card>
            )}
          ></FlatList>
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => {
              this.setState({ message: text });
            }}
            value={this.state.message}
            placeholder="Enter Message"
          ></Input>
          <Button
            danger
            rounded
            icon
            onPress={() => {
              this.sendMessage(this.state.message);
            }}
          >
            <Icon name="arrow-forward"></Icon>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "#01CBC6",
  },
  header: {
    backgroundColor: "#2B2B52",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20,
  },
  listContainer: {
    flex: 1,
    padding: 5,
  },
  listItem: {
    padding: 10,
  },
  messageText: {
    fontSize: 20,
  },
  timeText: {
    fontSize: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff",
  },
});
