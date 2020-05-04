import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import StartTrip from './screens/SartTrip';
import Trips from './screens/Trips';
import Trip from './screens/Trip';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: 'Home'}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ title: 'StartTrip'}}
            name="StartTrip"
            component={StartTrip}
          />
          <Stack.Screen
            options={{ title: 'Trips'}}
            name="Trips"
            component={Trips}
          />
          <Stack.Screen
            options={{ title: 'Trip'}}
            name="Trip"
            component={Trip}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

