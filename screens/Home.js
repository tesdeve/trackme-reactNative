import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Button from '../components/Button';
import SimpleToggleButton from '../components/SimpleToggleButton';


import colors from '../utils/colors';

export default function Home({navigation}) {
  const tripsButton = () => {
    navigation.navigate('Trips')
  }

  const startButton = () => {
    navigation.navigate('StartTrip')
  }


  //const navigation = useNavigation();
  // const buttonPressed = () => {
  //   navigation.navigate('StartTrip')
  // }
  
  return (

      <View style={styles.container}>
        <Button 
          text='Trips' 
          onPress={tripsButton} 
        />
        
         <SimpleToggleButton 
          //onPress={ () => {this.props.navigation.navigate("StartTrip")} }
         />

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


        {/* <Button
            text="Default"
            onPress={() => null}
          />
          <Button
            text="Default Outline"
            outline
            onPress={() => null}
          />
          <Button
            text="Secondary Large"
            size="large"
            theme="secondary"
            onPress={() => null}
          />
          <Button
            text="Secondary Small Disabled"
            size="small"
            theme="secondary"
            disabled
            onPress={() => null}
          />         */}