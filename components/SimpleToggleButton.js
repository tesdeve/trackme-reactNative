import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';;
export default class SimpleToggleButton extends Component {
    state={
        toggle: true  
    }
  

  buttonPressed(){
    alert('Que pasa Tigre?');
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  render() {
    const {toggle} = this.state;
    const textValue = toggle? "Start Trip" : "Trip Running";
    const buttonBG = toggle? "blue" : "red";
    const textColor = toggle? "white" : "yellow";

    return (      
      <View style={{ flexDirection: 'row'}}>  
        <TouchableOpacity
          style={{backgroundColor:buttonBG,     
                  borderColor: 'red',
                  borderWidth: 2,
                  borderRadius: 15,                  
                  paddingTop: 20,
                  paddingBottom: 20,
                  marginBottom: 10, 
                  width: "90%",
                  justifyContent: "center"
                  
                }}
          onPress={ () => this.buttonPressed()}
        >
          <Text style={{color:textColor,
                        flexDirection: 'row',
                        fontSize: 20,
                        fontWeight: "bold",
                        borderColor: 'red',                       
                        textAlign: 'center', 
                      }}> {textValue} </Text> 
        </TouchableOpacity>
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
});
