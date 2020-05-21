import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';

//import { StartStopContext } from '../MyContext'

import colors from '../utils/colors';

export default function Home({navigation}) {
  const tripsButton = () => {
    navigation.navigate('Trips')
  }

  const startButton = () => {
    navigation.navigate('StartTrip')
  }

  return (
  
  <View style={styles.container}>
    <Button 
      text='Trips' 
      onPress={tripsButton} 
    />


      <ToggleButton />


    <Button 
      text='Start Trip' 
      onPress={startButton}
      theme="secondary"
    /> 
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
