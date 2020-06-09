import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      uri : require('./src/images/dice1.png'),
      uri1 : require('./src/images/dice6.png')
    };
  }

  getRanNum = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  press = () => {
    var num = this.getRanNum();
    switch (num) {
      case 1:
        this.setState({uri : require('./src/images/dice1.png')})
        break;
      case 2:
        this.setState({uri : require('./src/images/dice2.png')})
        break;
      case 3:
        this.setState({uri : require('./src/images/dice3.png')})
        break;
      case 4:
        this.setState({uri : require('./src/images/dice4.png')})
        break;
      case 5:
        this.setState({uri : require('./src/images/dice5.png')})
        break;
      case 6:
        this.setState({uri : require('./src/images/dice6.png')})
        break;
    }

    var num2 = this.getRanNum();
    switch (num2) {
      case 1:
        this.setState({uri1 : require('./src/images/dice1.png')})
        break;
      case 2:
        this.setState({uri1 : require('./src/images/dice2.png')})
        break;
      case 3:
        this.setState({uri1 : require('./src/images/dice3.png')})
        break;
      case 4:
        this.setState({uri1 : require('./src/images/dice4.png')})
        break;
      case 5:
        this.setState({uri1 : require('./src/images/dice5.png')})
        break;
      case 6:
        this.setState({uri1 : require('./src/images/dice6.png')})
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.in}>
          <Image source = {this.state.uri} style = {styles.img}></Image>
          <Image source = {this.state.uri1} style = {styles.img}></Image>
        </View>
        <TouchableOpacity style = {styles.btn} onPress = {this.press}>
          <Text style = {styles.text}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff84b3',
    justifyContent : 'center'
  },
  in : {
    flexDirection : 'row',
    justifyContent : 'space-evenly'
  },
  btn : {
    alignItems : 'center',
    marginTop : 30,
    borderColor : "#c1c1c1",
    borderWidth : 5,
    paddingHorizontal : 40,
    paddingVertical : 7,
    borderRadius : 10,
    marginLeft : 100,
    marginRight : 100,
  },
  img : {
    width : 120,
    height : 120
  },
  text : {
    fontSize : 20,
    color : "#FFFFFF"
  }
});
