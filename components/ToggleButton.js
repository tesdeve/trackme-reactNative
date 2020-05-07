
import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Context = React.createContext('default value')
import { useNavigation } from '@react-navigation/native';


export default function SimpleToggleButton(){

  const [toggle, setToggle] = useState(true)
  const navigation = useNavigation();

  const buttonPressed = () => {
      setToggle(!toggle)
      navigation.navigate('StartTrip')
  };

  const textValue = toggle? "Start Trip" : "Trip Running";
  const buttonBG = toggle? "blue" : "red";
  const textColor = toggle? "white" : "yellow";

  return (      
    <View style={{ flexDirection: 'row'}}>  
      <TouchableOpacity
        style={[styles.button, {backgroundColor:buttonBG}]}                 
        onPress={ () => buttonPressed()}
      >
        <Text style={[styles.text, {color:textColor}]}> {textValue} </Text> 
      </TouchableOpacity>
    </View>
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
