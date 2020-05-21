import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../utils/colors';
import StartTripButton from '../components/StartTripButton';
export default function StartTrip({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text> OE!! Ready Start Trip</Text>
      <StartTripButton />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  // 'row will place them one after the other and 'column' one below the other
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',  
  }
})