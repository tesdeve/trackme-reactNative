import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import TripsOverview from '../components/TripsOverview';

import { fetchTrips} from '../utils/api';

const keyExtractor = ({ id }) => id;

export default class Trips extends React.Component {
  state = {
    trips: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const trips = await fetchTrips();
      // Update the states
      this.setState({
        trips,
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

  renderTrip= ({ item }) => {
    const { navigate } = this.props.navigation;
    const {
      id, start, name, avatar, distance, duration
    } = item;

    return (
      <TripsOverview
        name={name}
        avatar={avatar}
        start={start}
        distance= {distance}
        duration = {duration}
        onPress={() => navigate('Trip', { trip: item })}
      />
    );
  };

  render() {
    // here a copy of the variables is creates/instantiated
    const { loading, trips, error } = this.state;

    const tripsSorted = trips.sort((a, b) =>
      a.name.localeCompare(b.name));

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...Aquiiii!!! </Text>}
        {!loading &&
          !error && (
            <FlatList
              data={tripsSorted}
              keyExtractor={keyExtractor}
              renderItem={this.renderTrip}
            />
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
});

	
	
	
