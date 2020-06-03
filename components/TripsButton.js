import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TripsButton(startstop){

 const navigation = useNavigation()

 const buttonPressed = (startstop) => {
   navigation.navigate('Trips')
 }

const tripsButton = () => {
  navigation.navigate('Trips')
}
   
  return (    
    <View style={{ flexDirection: 'row'}}>  
      <TouchableOpacity
        style={styles.button}  
        onPress={ () => buttonPressed(tripsButton)}
      >
        <Text style={styles.text}>  Trips </Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#0e98da',
    backgroundColor: '#0e98da',
    borderWidth: 2,
    borderRadius: 45,                  
    paddingVertical: 20,
    width: "77%",
    justifyContent: "center"
  },
  text: {
    color: '#144d87',
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: "600",
    borderColor: 'red',                       
    textAlign: 'center', 
  }
});