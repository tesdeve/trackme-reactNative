import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

import { fetchLocations } from '../utils/api';

export default class MapThumbnail extends React.Component {
  state = {
    locations: [], 
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      //console.log(this.props)
      const {trip} = this.props // Extraigame esta variable
      const locations = await fetchLocations(trip);  

      this.setState({
        locations,  
        loading: false,
        error: false,
      });
    } catch (e) {
      console.log(e)
      this.setState({
        loading: false,
        error: true,
      });
    }
  }



  render() {
    const { loading, locations, error } = this.state;  
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...Aquiiii!!! </Text>}
        {!loading &&
          !error && (            
            <MapView style={styles.mapContainer}
            initialRegion={{
              latitude: locations[0].latitude,  
              longitude: locations[0].longitude,  
              latitudeDelta: 0.005,
              longitudeDelta: 0.015,
            }}>
            <MapView.Polyline 
            coordinates={locations}  
            strokeWidth={3}
            strokeColor= "red"
            />
          </MapView>
              
       
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  mapContainer: {     
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

	
	
	
