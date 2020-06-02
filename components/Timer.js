   
import React, { useState , useEffect, useContext}  from 'react';
import { Button, View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import moment from 'moment'
import { StartStopContext } from '../StartStopContext'


export default function Timer() {
  const  counter =  useContext(StartStopContext)

  setCountReset = () => {
    counter.setCount(0);
    counter.setToggleBase(false);
    counter.interval = null
  }
  
  const textValue = counter.toggleBase? "Stop & Save" : "";
  const buttonBG = counter.toggleBase? "red" :  "";
  const textColor = counter.toggleBase?  "white": "";
  const borderColor = counter.toggleBase?  'red' :"" ; 

    return(
        <View style={styles.container}>
          <Text style={styles.Text}>{counter.count}</Text>                    
          { counter.toggleBase != false &&
          <View style={styles.buttonReset}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor:buttonBG}, {borderColor: borderColor}]}  
                onPress={ () => setCountReset()}
              >
              <Text style={[styles.text, {color:textColor}]}> {textValue} </Text>
            </TouchableOpacity>
            </View>
          }
        </View>
      )
  }

  const styles = StyleSheet.create({
      container: {
      flex: 1,
     
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
    Text:{
      fontSize: 40,
   },
   buttonReset: {
    flexDirection: 'row', 
   },
   button: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 45,                   
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10, 
    marginTop: 30, 
    width: "77%",
    justifyContent: "center"
  },
  text: {
    //flexDirection: 'row',
    fontSize: 20,
    fontWeight: "600",
    borderColor: 'red',                       
    textAlign: 'center', 
  }
 })
