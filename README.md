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

    
