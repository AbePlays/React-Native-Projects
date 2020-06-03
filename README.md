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

#### Read all data
  
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
    
#### Read single data

    await AsyncStorage.getItem(key)
    .then(){}
    .catch(e){}
    
### Updating Data

    await AsyncStorage.mergeItem(key, updatedValue)
    .then(){}
    .catch(e){}
    
### Deleting Data

    await AsyncStorage.removeItem(key)
    .then() {}
    .catch(e) {}
    
## Using FlatList
    const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    ];
    
    export default function App() {
      return (
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }

    
