import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');

var count = 0;

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      randomNumber : '',
    }
  }

  componentDidMount() {
    this.setState({randomNumber : this.generateRandomNmber()});
    Alert.alert("Welcome To The Game", "You've 10 chances after which your result will be displayed." + '\n\n' + "Enjoy!!");
  }

  generateRandomNmber = () => {
    let ran = Math.floor(Math.random() * 25);
    this.setState({randomNumber : ran , isScratched : true});
    return ran;
  }

  scratchItem = index => {
    ++count;
    if(this.state.randomNumber === index) {
      itemArray[index] = 'lucky';
      setTimeout(() => {
        count = 0;
        Alert.alert(
          'You Won',
          'What Would You Like To Do Next',
          [
            {
              text: 'Reset Game',
              onPress: () => this.resetGame(),
            },
            {text: 'Previous Page',},
          ],
          {cancelable: false},
        );
      }, 500);
    } else {
      itemArray[index] = 'unlucky'
    }
    if(count >= 10) {
      count = 0;
      Alert.alert("Game Over", 'What Would You Like To Do Next',
      [
        {
          text: 'Reset Game',
          onPress: () => this.resetGame(),
        },
        {text: 'Previous Page',},
      ],
      {cancelable: false},);
    }
    this.forceUpdate();
  }

  scratchItemIcon = index => {
    if(itemArray[index] === 'lucky') {
      return 'dollar';
    } else if(itemArray[index] === 'unlucky') {
      return 'frown-o';
    }
    return 'circle';
  }

  scratchItemColor = index => {
    if(itemArray[index] === 'lucky') {
      return 'green';
    } else if(itemArray[index] === 'unlucky') {
      return 'red';
    }
    return 'black';
  }

  showAllItem = () => {
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky';
    this.forceUpdate();
  }

  resetGame = () => {
    this.setState({
      randomNumber : this.generateRandomNmber(),
    }, () => {
      itemArray.fill('empty');
      this.forceUpdate();
    })
  }

  render() {
    return (
    <View style={styles.container}>
      <View style = {styles.topBar}> 
        <Text style = {styles.topBarText}>Scratch And Win Game</Text>
      </View>
      <View style = {styles.grid}>
        <View style = {styles.itemRow}>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(0)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(0)}
            size = {50}
            color = {this.scratchItemColor(0)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(1)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(1)}
            size = {50}
            color = {this.scratchItemColor(1)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(2)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(2)}
            size = {50}
            color = {this.scratchItemColor(2)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(3)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(3)}
            size = {50}
            color = {this.scratchItemColor(3)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(4)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(4)}
            size = {50}
            color = {this.scratchItemColor(4)}>
            </FontAwesome>
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(5)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(5)}
            size = {50}
            color = {this.scratchItemColor(5)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(6)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(6)}
            size = {50}
            color = {this.scratchItemColor(6)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(7)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(7)}
            size = {50}
            color = {this.scratchItemColor(7)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(8)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(8)}
            size = {50}
            color = {this.scratchItemColor(8)}>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(9)}} >
            <FontAwesome 
            name = {this.scratchItemIcon(9)}
            size = {50}
            color = {this.scratchItemColor(9)}>
            </FontAwesome>
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
        <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(10)}} >
          <FontAwesome 
          name = {this.scratchItemIcon(10)}
          size = {50}
          color = {this.scratchItemColor(10)}>
          </FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(11)}} >
          <FontAwesome 
          name = {this.scratchItemIcon(11)}
          size = {50}
          color = {this.scratchItemColor(11)}>
          </FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(12)}} >
          <FontAwesome 
          name = {this.scratchItemIcon(12)}
          size = {50}
          color = {this.scratchItemColor(12)}>
          </FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(13)}} >
          <FontAwesome 
          name = {this.scratchItemIcon(13)}
          size = {50}
          color = {this.scratchItemColor(13)}>
          </FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(14)}} >
          <FontAwesome 
          name = {this.scratchItemIcon(14)}
          size = {50}
          color = {this.scratchItemColor(14)}>
          </FontAwesome>
        </TouchableOpacity>
      </View>
        <View style = {styles.itemRow}>
      <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(15)}} >
        <FontAwesome 
        name = {this.scratchItemIcon(15)}
        size = {50}
        color = {this.scratchItemColor(15)}>
        </FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(16)}} >
        <FontAwesome 
        name = {this.scratchItemIcon(16)}
        size = {50}
        color = {this.scratchItemColor(16)}>
        </FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(17)}} >
        <FontAwesome 
        name = {this.scratchItemIcon(17)}
        size = {50}
        color = {this.scratchItemColor(17)}>
        </FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(18)}} >
        <FontAwesome 
        name = {this.scratchItemIcon(18)}
        size = {50}
        color = {this.scratchItemColor(18)}>
        </FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(19)}} >
        <FontAwesome 
        name = {this.scratchItemIcon(19)}
        size = {50}
        color = {this.scratchItemColor(19)}>
        </FontAwesome>
      </TouchableOpacity>
    </View>
        <View style = {styles.itemRow}>
    <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(20)}} >
      <FontAwesome 
      name = {this.scratchItemIcon(20)}
      size = {50}
      color = {this.scratchItemColor(20)}>
      </FontAwesome>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(21)}} >
      <FontAwesome 
      name = {this.scratchItemIcon(21)}
      size = {50}
      color = {this.scratchItemColor(21)}>
      </FontAwesome>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(22)}} >
      <FontAwesome 
      name = {this.scratchItemIcon(22)}
      size = {50}
      color = {this.scratchItemColor(22)}>
      </FontAwesome>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(23)}} >
      <FontAwesome 
      name = {this.scratchItemIcon(23)}
      size = {50}
      color = {this.scratchItemColor(23)}>
      </FontAwesome>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.item} onPress = {() => {this.scratchItem(24)}} >
      <FontAwesome 
      name = {this.scratchItemIcon(24)}
      size = {50}
      color = {this.scratchItemColor(24)}>
      </FontAwesome>
    </TouchableOpacity>
  </View>
      </View>
      <Button warning style = {styles.button} onPress = {() => {this.showAllItem()}}>
        <Text style = {[styles.buttonText, {marginLeft : 150}]}>Show All</Text>
      </Button>
      <Button info style = {styles.button} onPress = {() => {this.resetGame()}}>
        <Text style = {[styles.buttonText, {marginLeft : 140}]}>Reset Game</Text>
      </Button>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid : {
    
  },
  item : {
    alignItems : 'center',
    padding : 10,
    borderWidth : 2,
    borderColor : "#c1c1c1",
    minWidth : 70
  },
  itemRow : {
    flexDirection : 'row'
  },
  button : {
    marginTop : 15,
    width : "100%",
  },
  buttonText : {
    fontSize : 15,
    color : "#fff",
  },
  topBar : {
    backgroundColor : "#36688D",
    height : 40,
    justifyContent : 'center',
    width : Dimensions.get('window').width,
    marginBottom : 20
  },
  topBarText : {
    textAlign : 'center',
    color : '#FFFFFF',
    fontSize : 15
  }
});
