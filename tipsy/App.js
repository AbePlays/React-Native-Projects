import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Home({ navigation }) {
  const [person, setPerson] = useState(1);
  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(10);

  const [isOneEnabled, setIsOneEnabled] = useState(false);
  const toggleSwitchOne = () =>
    setIsOneEnabled((previousState) => {
      setTip(0);
      return !previousState;
    });

  const [isTwoEnabled, setIsTwoEnabled] = useState(true);
  const toggleSwitchTwo = () =>
    setIsTwoEnabled((previousState) => {
      setTip(10);
      return !previousState;
    });

  const [isThreeEnabled, setIsThreeEnabled] = useState(false);
  const toggleSwitchThree = () =>
    setIsThreeEnabled((previousState) => {
      setTip(20);
      return !previousState;
    });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Enter bill total</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={(text) => {
              setPrice(text);
            }}
            placeholder="e.g.120"
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.mainTitleFirst}>Select Tip</Text>
        <View style={styles.tip}>
          <View style={styles.tipContainer}>
            <Text style={styles.tipText}>0%</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#239921" }}
              thumbColor={isOneEnabled ? "#239921" : "#f4f3f4"}
              ios_backgroundColor="#239921"
              onValueChange={toggleSwitchOne}
              value={isOneEnabled}
            />
          </View>
          <View style={styles.tipContainer}>
            <Text style={styles.tipText}>10%</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#239921" }}
              thumbColor={isTwoEnabled ? "#239921" : "#f4f3f4"}
              ios_backgroundColor="#239921"
              onValueChange={toggleSwitchTwo}
              value={isTwoEnabled}
            />
          </View>
          <View style={styles.tipContainer}>
            <Text style={styles.tipText}>20%</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#239921" }}
              thumbColor={isThreeEnabled ? "#239921" : "#f4f3f4"}
              ios_backgroundColor="#239921"
              onValueChange={toggleSwitchThree}
              value={isThreeEnabled}
            />
          </View>
        </View>
        <Text style={styles.mainTitleFirst}>Choose Split</Text>
        <View style={styles.bottomContainer}>
          <TextInput
            placeholder={person}
            style={styles.bottomTextInput}
          ></TextInput>
          <View style={styles.button}>
            <TouchableWithoutFeedback
              onPress={() => {
                setPerson((prev) => {
                  if (prev == 0) return 0;
                  else return prev - 1;
                });
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },
                ]}
              >
                -
              </Text>
            </TouchableWithoutFeedback>
            <Text style={styles.buttonTextSpace}>|</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                setPerson((prev) => prev + 1);
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  },
                ]}
              >
                +
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 0,
            right: 0,
          }}
        >
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() =>
              navigation.navigate("Final", {
                total: price,
                people: person,
                tip: tip,
              })
            }
          >
            <Text style={{ color: "white", fontSize: 25 }}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Final({ route, navigation }) {
  const price = route.params.total;
  const person = route.params.people;
  const tip = route.params.tip;

  return (
    <View style={{ flex: 1 }}>
      <View style={finalStyles.top}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={finalStyles.topText}>Total per person</Text>
          <Text
            style={[
              finalStyles.topText,
              {
                fontSize: 30,
                color: "#239921",
                marginTop: 10,
              },
            ]}
          >
            {(price * tip) / (100 * person)}
          </Text>
        </View>
      </View>
      <View style={finalStyles.main}>
        <View
          style={{
            flex: 1,
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#808080",
              width: 250,
              textAlign: "center",
            }}
          >
            Split between {person} people, with {tip}% split
          </Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 30, left: 0, right: 0 }}>
        <TouchableOpacity
          style={finalStyles.bottomButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Recalculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    marginTop: 30,
  },
  topText: {
    color: "#808080",
    fontSize: 20,
    marginLeft: 30,
  },
  textInputContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  textInput: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    color: "#808080",
    textAlign: "center",
    paddingVertical: 10,
    height: 70,
  },
  main: {
    flex: 1,
    backgroundColor: "#b7f7d7",
  },
  mainTitleFirst: {
    marginTop: 10,
    color: "#808080",
    fontSize: 20,
    marginLeft: 30,
  },
  tip: {
    marginTop: 30,
    marginBottom: 10,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  tipText: {
    fontSize: 30,
    color: "#239921",
    marginBottom: 20,
  },
  bottomContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomTextInput: {
    fontSize: 20,
    color: "#808080",
    width: 100,
    marginRight: 10,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
  },
  buttonText: {
    width: 40,
    height: 30,
    textAlign: "center",
    backgroundColor: "#c1c1c1",
    fontSize: 20,
    color: "#404040",
  },
  buttonTextSpace: {
    height: 30,
    fontSize: 20,
    width: 10,
    textAlign: "center",
    backgroundColor: "#c1c1c1",
    color: "#e1e1e1",
  },
  bottomButton: {
    alignSelf: "center",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#239921",
  },
});

const finalStyles = StyleSheet.create({
  top: {
    flex: 4,
    backgroundColor: "#b7f7d7",
  },
  topText: {
    fontSize: 20,
    color: "#808080",
  },
  main: {
    flex: 6,
  },
  bottomButton: {
    alignSelf: "center",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#239921",
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Final"
          component={Final}
          options={{
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
