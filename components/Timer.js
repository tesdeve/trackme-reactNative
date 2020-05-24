import React, { useState , useEffect }  from 'react';
import { Button, View, StyleSheet,Text} from 'react-native';
import moment from 'moment'
import { StartStopContext } from '../MyContext'


export default function Timer() {
 let [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle(counterStartTrip) {
      setIsActive(!counterStartTrip.toggleBase)
      //console.log(counterStartTrip.count)
      //setSeconds(counterStartTrip.count)
  }

  setCountReset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

    return(
      <StartStopContext.Consumer>  
        { counterStartTrip => { 

          if (counterStartTrip.toggleBase === false){
            toggle(counterStartTrip)
            console.log(seconds)

          }else {
            console.log(counterStartTrip.toggleBase)
            setCountReset()
           }
            return(
              <View style={styles.container}>
                <Text style={styles.Text}>{seconds}</Text>
                <Button
                  title= 'Up'
                  onPress={() => {
                    toggle()
                  }}
                ></Button>
                      <Button
                  title= 'Reset'
                  onPress={() => {
                    setCountReset()
                  }}
                ></Button>
              </View>
            )
        }}
        </StartStopContext.Consumer>
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
   }
 })

// const [seconds, setSeconds] = useState(0);
// const [isActive, setIsActive] = useState(false);
//
// function toggle(counterStartTrip) {
//     setIsActive(!counterStartTrip.toggleBase)
// }
//
// setCountReset = () => {
//   setSeconds(0);
//   setIsActive(false);
// }
//
// useEffect(() => {
//   let interval = null;
//   if (isActive) {
//     interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 1000);
//   } else if (!isActive && seconds !== 0) {
//     clearInterval(interval);
//   }
//   return () => clearInterval(interval);
// }, [isActive, seconds]);
//