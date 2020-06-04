import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Home({ navigation }) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const loadData = (nav) => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((res) => res.json())
      .then((data) => {
        let lyrics = "";
        if (data.lyrics === undefined) lyrics = "Not Found";
        else lyrics = data.lyrics;

        nav.navigate("Result", {
          lyrics: lyrics,
          song: song,
          artist: artist,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <View style={styles.top}>
        <Image source={require("./assets/hp.png")} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold" }}>
          Lyrics Finder
        </Text>
        <Text>Find lyrics of your favorite songs</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter the name of the song"
          style={styles.textInput}
          onChangeText={(text) => {
            setSong(text);
          }}
        />
        <TextInput
          placeholder="Enter the name of the artist"
          style={styles.textInput}
          onChangeText={(text) => {
            setArtist(text);
          }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            loadData(navigation);
          }}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Result({ route, navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <Text style={[styles.title, { marginTop: 10 }]}>{route.params.song}</Text>
      <Text style={[styles.title, { fontWeight: "bold", fontSize: 20 }]}>
        {route.params.artist}
      </Text>
      <Text style={styles.result}>{route.params.lyrics}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    marginTop: 50,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    marginTop: 50,
    alignItems: "center",
  },
  main: {},
  form: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    paddingLeft: 30,
    width: 300,
    borderRadius: 5,
    borderColor: "#808080",
    borderWidth: 2,
    color: "#808080",
    marginBottom: 10,
  },
  btn: {
    width: "100%",
    backgroundColor: "#5f63b9",
    height: 40,
    width: 300,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 15,
  },
  result: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
