
import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import ToggleButton from '../components/ToggleButton';

import { StartStopContext } from '../MyContext'


export default function StartTripButton(){


 const [toggle, setToggle] = useState(true)
 const navigation = useNavigation()
 
 const buttonPressed = (startstrip) => {
    //alert(" Toggle Base was= " + startstrip.toggleBase) 
   // alert(" Toggle Base was= " + setToggleBase(startstrip.toggleBase)) 
   //setToggle(!toggle)

   ///if (startstrip.toggleBase == true) {
    startstrip.setToggleBase(!startstrip.toggleBase)   
    //startstrip.setToggleBase == startstrip.toggleBase
   // alert(" Toggle Base CHANGED TO = " + startstrip.toggleBase)
   }
   // else if (startstrip.toggleBase == false) {
   // setToggle(!toggle)
  // startstrip.setToggleBase(!startstrip.toggleBase)
    
   // alert(" Toggle Base CHANGED TO = " + startstrip.toggleBase)
  //}

 //}

 //const textValue = toggle? "Start Trip" : "Stop Trip";
 //const buttonBG = toggle? "green" : "red";
 //const textColor = toggle? "white" : "yellow";

  return (     
   <StartStopContext.Consumer>  
     { startstrip => { 
      alert("Toggle Base is2 = " +  startstrip.toggleBase) 

        const textValue = startstrip.toggleBase? "Start Trip" : "Stop Trip";
        const buttonBG = startstrip.toggleBase? "green" : "red";
        const textColor = startstrip.toggleBase? "white" : "yellow";
        
      return (  
      <View style={{ flexDirection: 'row'}}>  
        <TouchableOpacity
          style={[styles.button, {backgroundColor:buttonBG}]}  
          onPress={ () => buttonPressed(startstrip)}
        >
        <Text style={[styles.text, {color:textColor}]}> {textValue} </Text> 
        </TouchableOpacity>
      </View>
      )
     }

      }
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
    borderRadius: 15,                  
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10, 
    width: "90%",
    justifyContent: "center"
  },
  text: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: "bold",
    borderColor: 'red',                       
    textAlign: 'center', 
  }
});




  //const [toggle, setToggle] = useState(true)
  //const navigation = useNavigation();
//
  //const buttonPressed = () => {
  //    setToggle(!toggle)
  //    navigation.navigate('StartTrip')
  //};
//
  //const textValue = toggle? "Start Trip" : "Trip Running";
  //const buttonBG = toggle? "blue" : "red";
  //const textColor = toggle? "white" : "yellow";



  //const [toggle, setToggle] = useState(true)
  //const navigation = useNavigation()
  //
  //const buttonPressed = (startstrip) => {
  //   alert(" Start Trip = " + startstrip.toggleBase) 
  //  //startstop.toggleBase = (!startstop.toggleBase)
  //  //alert(startstop.toggleBase) 
  //  //setToggle(!toggle)
  //  //startstrip.toggleBase = (!startstrip.toggleBase)
  //  if (startstrip.toggleBase == true) {
  //  // alert(" Start Trip = " + startstrip.toggleBase)
  //   startstrip.toggleBase = (!startstrip.toggleBase)
  //   setToggle(startstrip.toggleBase)
  //   alert(" Toggle Base = " + startstrip.toggleBase)
  //   startstrip.setToggleBase(startstrip.toggleBase)
  //  }
  // if (startstrip.toggleBase == false) {
  //  alert(" Start Trip = " + startstrip.toggleBase)
  //   setToggle(!toggle)
  //   startstrip.toggleBase = (!startstrip.toggleBase)
 //
  //   alert(" Start Trip CHANGED TO = " + startstrip.toggleBase)
 //
  //   //alert(startstrip.toggleBase) 
  // }
 //
  //}
 //
  //const textValue = toggle? "Start Trip" : "Stop Trip";
  //const buttonBG = toggle? "green" : "red";
  //const textColor = toggle? "white" : "yellow";
 //