   
import React, { useState , useEffect, useContext}  from 'react';
import { Button, View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import moment from 'moment'
import { StartStopContext } from '../StartStopContext'


export default function Timer() {
  let [centiseconds, setCentiseconds] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutess] = useState(0);
  let [hours, setHours] = useState(0);

 const  counter =  useContext(StartStopContext)
 const pad =(n) => n < 10 ? '0' + n : n
 //const duration = moment.duration(counter.interval)
 centiseconds = Math.floor(counter.count%10)
 seconds = Math.floor(counter.count/10)%60 
 minutes  = Math.floor(counter.count/10/60)

  const textValue = counter.toggleBase? "Stop & Save" : "Stop & Save";
  const buttonBG = counter.toggleBase? "red" :  "red";
  const textColor = counter.toggleBase?  'white': "white";
  const borderColor = counter.toggleBase?  'red' :"red" ; 


  setCountReset = () => {
    counter.setCount(0);
    counter.setToggleBase(false);
    counter.interval = null
  }
    return(
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{pad(minutes)}:</Text>
          <Text style={styles.timerText}>{pad(seconds)}:</Text>
          <Text style={styles.timerText}> {pad(centiseconds)}</Text>
        </View>
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
          {  counter.toggleBase == false &&counter.count !== 0 &&
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
      paddingHorizontal:10,
     
    },
      timerContainer: {
        flexDirection: 'row',    
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
      fontSize: 20,
      fontWeight: "600",
      borderColor: 'red',                       
      textAlign: 'center', 
    },
    timerText: {
      fontSize: 66,
      fontWeight: '200',
      width: 110,
    },
 })
