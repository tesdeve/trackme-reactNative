
import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StartStopContext } from '../StartStopContext'


export default function ToggleButton(startstop){

// const [toggle, setToggle] = useState(true)
 const navigation = useNavigation()

 const buttonPressed = (startstop) => {
   navigation.navigate('StartTrip')
 }




  return (     
   <StartStopContext.Consumer>  
     { startstop =>
        {
          console.log(" ToggleBase on Home: " + startstop.toggleBase)
        //  alert("Toggle Base is at  Home Page = " +  startstop.toggleBase) 
          const textValue = startstop.toggleBase? "Trip Currently Running"  : "Start Trip";
          const buttonBG = startstop.toggleBase?  "#f0ff00" :"#72db93" ;
          const textColor = startstop.toggleBase?  "#fd7f00" : "#518662";
          const borderColor = startstop.toggleBase? '#fd7f00' : "#72db93";
      
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
