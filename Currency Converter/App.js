import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

const Currency = {
  Dollar : 0.014,
  SwissFranc : 0.013,
  Euro : 0.012,
  CaymanianDollar : 0.011,
  GibraltarPound : 0.0105,
  BritishPound : 0.0105,
  JordanianDinar : 0.0097,
  OmaniRial : 0.0053,
  BahrainiDinar : 0.0052,
  KuwaitiDinar : 0.0042
}

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue : '',
      resultValue : '0.0',
    }
  }

  buttonPressed = currency => {
    if(this.state.inputValue === "") {
      Alert.alert("Enter A Value");
    }
    let result = parseFloat(this.state.inputValue) * Currency[currency];
    this.setState({
      resultValue : result.toFixed(3)
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style ={styles.screenview}>
          <View style = {styles.resultcontainer}>
            <Text style = {styles.resultValue}>
              {this.state.resultValue}
            </Text>
          </View>
          <View style = {styles.inputcontainer}>
            <TextInput style = {[styles.input, {textAlign : "center"}]} 
            selectionColor = "#FFFFFF"
            keyboardType = "number-pad"
            placeholder = "Enter Value"
            value = {this.state.inputValue}
            onChangeText = {(input) => this.setState({inputValue : input})} ></TextInput>
          </View>
          <View style = {styles.converterbuttoncontainer}> 
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('Dollar')}>
              <Text style = {styles.converterbuttontext}>Dollar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('SwissFranc')}>
              <Text style = {styles.converterbuttontext}>Swiss Franc</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('Euro')}>
              <Text style = {styles.converterbuttontext}>Euro</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('CaymanianDollar')}>
              <Text style = {styles.converterbuttontext}>Caymanian Dollar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('GibraltarPound')}>
              <Text style = {styles.converterbuttontext}>Gibraltar Pound</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('BritishPound')}>
              <Text style = {styles.converterbuttontext}>British Pound</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('JordanianDinar')}>
              <Text style = {styles.converterbuttontext}>Jordanian Dinar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('OmaniRial')}>
              <Text style = {styles.converterbuttontext}>Omani Rial</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('BahrainiDinar')}>
              <Text style = {styles.converterbuttontext}>Bahraini Dinar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.converterbutton}
            onPress = {() => this.buttonPressed('KuwaitiDinar')}>
              <Text style = {styles.converterbuttontext}>Kuwaiti Dinar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36688D',
  },
  screenview : {
    flex : 1,
    marginTop : 50,
  },
  resultcontainer : {
    height : 70,
    justifyContent : 'center',
    borderColor : "#c1c1c1",
    backgroundColor : "#BDA589",
    alignItems : 'center',
    borderWidth : 3,
  },
  resultValue : {
    fontSize : 20,
    fontWeight : 'bold',
    color : "#FFF"
  },
  inputcontainer : {
    height : 70,
    marginTop : 15,
    color : "#FFFFFF",
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 3,
    borderColor : "#c1c1c1",
    backgroundColor : "#BDA589"
  },
  input : {
    color : "#FFFFFF",
    fontSize : 20,
    alignItems : 'center',
    justifyContent : 'center',
  },
  converterbuttoncontainer : {
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginTop : 15,
    borderColor : "#c1c1c1",
    borderWidth : 3
  },
  converterbutton : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : "#BDA589",
    height : 60,
    borderColor : "#c1c1c1",
    borderWidth : 3,
    width : '50%',
  },
  converterbuttontext : {
    color : '#fff',
    fontSize : 15,
    fontWeight : 'bold'
  }
});
