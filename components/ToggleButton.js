
import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StartStopContext } from '../MyContext'


export default function ToggleButton(startstop){

 const [toggle, setToggle] = useState(true)
 const navigation = useNavigation()

 const buttonPressed = (startstop) => {
   navigation.navigate('StartTrip')
 }




  return (     
   <StartStopContext.Consumer>  
     { startstop =>
        {
        //  alert("Toggle Base is at  Home Page = " +  startstop.toggleBase) 
          const textValue = startstop.toggleBase? "Start Trip" : "Trip Currently Running";
          const buttonBG = startstop.toggleBase? "#72db93" : "#f0ff00";
          const textColor = startstop.toggleBase? "#518662" : "#fd7f00";
          const borderColor = startstop.toggleBase? "#72db93" :'#fd7f00';
      
          return (    
            <View style={[ styles.homeStartTrip, { flexDirection: 'row'}]}>  
              <TouchableOpacity
                style={[styles.button, {backgroundColor:buttonBG}, {borderColor: borderColor}]}  
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
  homeStartTrip: {
    marginTop: 50,
  },
  button: {
   // borderColor: '#ffdb00',
    borderWidth: 2,
    borderRadius: 45,                  
    paddingVertical: 20,
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
