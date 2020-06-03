import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StartStopContext } from '../StartStopContext'


export default function StartTripButton(){

 const navigation = useNavigation()
 const buttonPressed = (startstrip) => {
    startstrip.setToggleBase(!startstrip.toggleBase) 
 }

  return (     
   <StartStopContext.Consumer>  
    { startstrip => { 
      if (!startstrip.toggleBase && startstrip.count === 0){
        startstrip.textValue = "Start Trip"
      }
      else if (startstrip.toggleBase){
        startstrip.textValue = "Pause Trip" 
      }
      else if (!startstrip.toggleBase && startstrip.count !== 0) {
        startstrip.textValue = "Continue"
      }
     const buttonBG = startstrip.toggleBase? "#f0ff00" :  "#72db93";
     const textColor = startstrip.toggleBase?  "#fd7f00": "#518662";
     const borderColor = startstrip.toggleBase?  '#fd7f00' :"#72db93" ; 

      return (  
        <View style={{ flexDirection: 'row'}}> 
          <TouchableOpacity
            style={[styles.button, {backgroundColor:buttonBG}, {borderColor: borderColor}]}  
            onPress={ () => buttonPressed(startstrip)}
          >
          <Text style={[styles.text, {color:textColor}]}> {startstrip.textValue} </Text> 
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