import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapThumbnail from '../components/MapThumbnail';
import TripDetails from '../components/TripDetails';

import colors from '../utils/colors';


export default class Trip extends React.Component {

  render() {

    const { trip } = this.props.route.params;
    //console.log(this.props)
    const {
      avatar, name, start, duration,  distance, trip_id,
    } = trip;

    return (      
      <View style={styles.container}>

        <View style={styles.avatarSection}>
          <MapThumbnail trip={trip_id} />
        </View>

        <View style={styles.viewName}>
          <Text style={styles.textName}>{name}</Text>
        </View>
        <View style={styles.detailsSection}>
          <TripDetails icon="bubble-chart" title="Done" subtitle={start} />                  
          <TripDetails icon="map" title="Distance" subtitle={distance} />
          <TripDetails icon="watch" title="Duration" subtitle={duration} />  
        </View>
      </View>
    );
  }
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsSection1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewName: {  
    alignItems: 'center',
    backgroundColor: 'white',  
    borderBottomColor: colors.greyDark,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textName: { 
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',    
  },
});

