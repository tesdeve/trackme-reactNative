
import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StartStopContext } from '../MyContext'


export default function ToggleButton(startstop){

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



 const [toggle, setToggle] = useState(true)
 const navigation = useNavigation()

//alert(startstop.toggleBase)

 const buttonPressed = (startstop) => {
   //alert("Toggle Base is = " +  startstop.toggleBase) 

   //alert("TextValue in ToggleButton is = " +  startstop.textValue) 
    //if (startstop.toggleBase == true ) {
    // setToggle(!toggle)
     //startstop.setToggleBase(!startstop.toggleBase)
     //alert("Toggle Base Home Screen Changed to = " +  startstop.toggleBase) 
 
  // }
  //else if (startstop.toggleBase == true) {
  //  //setToggle(!toggle)
  //  startstop.setToggleBase(!startstop.toggleBase)
  // // startstop.toggleBase = (!startstop.toggleBase)
  //  alert("Toggle Base on Home Screen Is or Changed to = " +  startstop.toggleBase) 
  // 
  //}

   navigation.navigate('StartTrip')
 }

//alert(toggle)
//const buttonPressed = (startstoptoogleBase) => {
// if (startstoptoogleBase == false) {
//   setToggle(!toggle)
// }
//   navigation.navigate('StartTrip')
//




  return (     
   <StartStopContext.Consumer>  
     { startstop =>
        {
          alert("Toggle Base is1 = " +  startstop.toggleBase) 
          const textValue = startstop.toggleBase? "Start Trip" : "Trip Running";
          const buttonBG = startstop.toggleBase? "blue" : "red";
          const textColor = startstop.toggleBase? "white" : "yellow";
      
          return (    
            <View style={{ flexDirection: 'row'}}>  
              <TouchableOpacity
                style={[styles.button, {backgroundColor:buttonBG}]}  
                onPress={ () => 
                  buttonPressed(startstop)}  
                //onPress={ () => buttonPressed(startstop.toggleBase)}         
                //onPress={ () => alert(startstop.toggleBase) } Like this I know what value is on the Provider
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
