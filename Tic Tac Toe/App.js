import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {Button} from 'native-base';

var itemArray = new Array(9).fill('empty');

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isCross : true,
      winMessage : ""
    }
  }

  drawItem = itemNumber => {
    if(itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({
        isCross : !this.state.isCross
      })
    }
    this.winGame();
  }

  chooseItemIcon = itemNumber => {
    if(itemArray[itemNumber] != 'empty') {
      return itemArray[itemNumber] ? 'cross' : 'circle';
    }
    return 'pencil';
  }

  chooseItemColor = itemNumber => {
    if(itemArray[itemNumber] != 'empty') {
      return itemArray[itemNumber] ? 'red' : 'green';
    }
    return 'black';
  }

  resetGame = () => {
    itemArray.fill('empty');
    this.setState({ winMessage : '' , isCross : true})
    this.forceUpdate();
  }

  winGame = () => {
    var a = 0;
    if((itemArray[0] !== 'empty') && (itemArray[0] === itemArray[1]) && (itemArray[0] === itemArray[2])) {
      this.setState({ winMessage : (itemArray[0] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[3] !== 'empty') && (itemArray[3] === itemArray[4]) && (itemArray[3] === itemArray[5])) {
      this.setState({ winMessage : (itemArray[3] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[6] !== 'empty') && (itemArray[6] === itemArray[7]) && (itemArray[6] === itemArray[8])) {
      this.setState({ winMessage : (itemArray[6] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[0] !== 'empty') && (itemArray[0] === itemArray[3]) && (itemArray[0] === itemArray[6])) {
      this.setState({ winMessage : (itemArray[0] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[1] !== 'empty') && (itemArray[1] === itemArray[4]) && (itemArray[1] === itemArray[7])) {
      this.setState({ winMessage : (itemArray[1] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[2] !== 'empty') && (itemArray[2] === itemArray[5]) && (itemArray[2] === itemArray[8])) {
      this.setState({ winMessage : (itemArray[2] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[0] !== 'empty') && (itemArray[0] === itemArray[4]) && (itemArray[0] === itemArray[8])) {
      this.setState({ winMessage : (itemArray[0] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }
    else if((itemArray[2] !== 'empty') && (itemArray[2] === itemArray[4]) && (itemArray[2] === itemArray[6])) {
      this.setState({ winMessage : (itemArray[2] ? 'Cross Wins' : 'Circle Wins')});
      a = 1;
    }

    if(a == 1) {
      setTimeout(() => {
        this.resetGame();
      }, 2000);
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.grid}>
          <View style = {styles.row}>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(0)}>
                <Entypo
                  name = {this.chooseItemIcon(0)}
                  size = {50}
                  color = {this.chooseItemColor(0)}
                ></Entypo>
              </TouchableOpacity>
            </View>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(1)}>
                <Entypo
                  name = {this.chooseItemIcon(1)}
                  size = {50}
                  color = {this.chooseItemColor(1)}
                ></Entypo>
              </TouchableOpacity>
            </View>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(2)}>
                <Entypo
                  name = {this.chooseItemIcon(2)}
                  size = {50}
                  color = {this.chooseItemColor(2)}
                ></Entypo>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.row}>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(3)}>
                <Entypo
                  name = {this.chooseItemIcon(3)}
                  size = {50}
                  color = {this.chooseItemColor(3)}
                ></Entypo>
              </TouchableOpacity>
            </View>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(4)}>
                <Entypo
                  name = {this.chooseItemIcon(4)}
                  size = {50}
                  color = {this.chooseItemColor(4)}
                ></Entypo>
              </TouchableOpacity>
            </View>
            <View style = {styles.item}>
              <TouchableOpacity onPress = {() => this.drawItem(5)}>
                <Entypo
                  name = {this.chooseItemIcon(5)}
                  size = {50}
                  color = {this.chooseItemColor(5)}
                ></Entypo>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.row}>
          <View style = {styles.item}>
            <TouchableOpacity onPress = {() => this.drawItem(6)}>
              <Entypo
                name = {this.chooseItemIcon(6)}
                size = {50}
                color = {this.chooseItemColor(6)}
              ></Entypo>
            </TouchableOpacity>
          </View>
          <View style = {styles.item}>
            <TouchableOpacity onPress = {() => this.drawItem(7)}>
              <Entypo
                name = {this.chooseItemIcon(7)}
                size = {50}
                color = {this.chooseItemColor(7)}
              ></Entypo>
            </TouchableOpacity>
          </View>
          <View style = {styles.item}>
            <TouchableOpacity onPress = {() => this.drawItem(8)}>
              <Entypo
                name = {this.chooseItemIcon(8)}
                size = {50}
                color = {this.chooseItemColor(8)}
              ></Entypo>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <Text style = {styles.win}>{this.state.winMessage}</Text>
        <Button full rounded success style = {styles.button} onPress = {() => this.resetGame()}>
          <Text style = {styles.reset}>Reset Game</Text>
        </Button>
        <View style = {styles.foot}>
          <Text style = {styles.footer}>Built By Abe10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    alignItems : 'center',
    justifyContent : 'center'
  },
  grid : {

  },
  row : {
    flexDirection : 'row'
  },
  item : {
    borderWidth : 3,
    borderColor : '#000',
    padding : 20
  },
  reset : {
    padding : 20,
    fontSize : 15,
    fontWeight : 'bold',
    color : "#fff"
  },
  button : {
    margin : 20,
    padding : 10
  },
  win : {
    marginTop : 20,
    fontSize : 20,
    fontWeight : 'bold'
  },
  footer : {
    position : 'absolute',
    marginTop : 60,
    fontSize : 20,
  },
  foot : {
    alignItems : 'center'
  }
})