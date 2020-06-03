import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";

const go = async (num) => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require(`./assets/Sound/${num}.m4a`));
    await soundObject.playAsync();
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.topView}>
        <Text style={styles.heading}>Learn 1-10 in Japanese</Text>
      </View>
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Press any button
      </Text>
      <View style={styles.main}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(1);
            }}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(2);
            }}
          >
            <Text>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(3);
            }}
          >
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(4);
            }}
          >
            <Text>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(5);
            }}
          >
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(6);
            }}
          >
            <Text>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(7);
            }}
          >
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(8);
            }}
          >
            <Text>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(9);
            }}
          >
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              go(10);
            }}
          >
            <Text>10</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: "#202020",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    paddingVertical: 10,
  },
  main: {
    marginTop: 50,
    marginBottom: 50,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  btn: {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 7,
    width: 150,
  },
});

export default App;
