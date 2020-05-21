import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StartStopContext } from '../MyContext'


export default function StartTripButton(){


 const [toggle, setToggle] = useState(true)
 const navigation = useNavigation()
 
 const buttonPressed = (startstrip) => {
    startstrip.setToggleBase(!startstrip.toggleBase) 
 }

  return (     
   <StartStopContext.Consumer>  
    { startstrip => { 
      // alert("Toggle Base is2 = " +  startstrip.toggleBase) 

      const textValue = startstrip.toggleBase? "Start Trip" : " Stop Trip";
      const buttonBG = startstrip.toggleBase? "#72db93" : "#f0ff00";
      const textColor = startstrip.toggleBase? "#518662" : "#fd7f00";
      const borderColor = startstrip.toggleBase? "#72db93" :'#fd7f00';
          
      return (  
        <View style={{ flexDirection: 'row'}}>  
          <TouchableOpacity
            style={[styles.button, {backgroundColor:buttonBG}, {borderColor: borderColor}]}  
            onPress={ () => buttonPressed(startstrip)}
          >
          <Text style={[styles.text, {color:textColor}]}> {textValue} </Text> 
          </TouchableOpacity>
        </View>
        )
    }}
   </StartStopContext.Consumer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 45,                   
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10, 
    width: "77%",
    justifyContent: "center"
  },
  text: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: "600",
    borderColor: 'red',                       
    textAlign: 'center', 
  }
});