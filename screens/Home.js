import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import TripsButton from '../components/TripsButton';
import ToggleButton from '../components/ToggleButton';


import colors from '../utils/colors';

export default function Home({navigation}) {
// const tripsButton = () => {
//   navigation.navigate('Trips')
// }
//
// const startButton = () => {
//   navigation.navigate('StartTrip')
// }

  return (
  <View style={styles.container}>
    <TripsButton/>      
    <ToggleButton />
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
