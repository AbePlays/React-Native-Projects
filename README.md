# Cheat Sheet

## Adding Navigation 🏃

    Install React-Navigation dependency : expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    
    
    const Stack = createStackNavigator();

    function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    export default App;
    
   ### Move between the screens
   
    function HomeScreen({ navigation }) {
      return (
        <View>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      );
    }
    
    function DetailsScreen() {
      return (
        <View>
          <Text>Details Screen</Text>
        </View>
      );
    }
    
## Using Async Storage 📚

### Storing data

    import AsyncStorage from '@react-native-community/async-storage';

    const value = {
        fname: "Abe",
        email: "abe@thebabe.com"
    }
    
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        // saving error
      }
    }
    
  '@storage_Key' should be a unique value. Current time can be used as a unique parameter. Make sure it's a String.
  
### Reading data
  
    try {
    await AsyncStorage.getAllKeys()
    .then(keys => {
        AsyncStorage.multiGet(keys)
        .then(res => {
            // use data
        })
        .catch(e) {}
    })
    .catch(e) {}
    } catch(e) {
    // read key error
    }

    
