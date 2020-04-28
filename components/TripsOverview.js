import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';


import colors from '../utils/colors';

export default function TripsOverview({
  name, avatar, start, distance, duration, onPress,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      style={styles.container}
      onPress={onPress}
    >
     <View>
        <View style={styles.avatar}></View>        
        <View style={styles.rowContainer}> 
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title1}>{start}</Text>
        </View>
        <View style={styles.rowDetails}>
          <Text style={styles.smaller}>{distance}</Text>          
          <Text style={styles.smaller1}>{duration}</Text>         
        </View>
      </View>
    </TouchableHighlight>
  );
}

TripsOverview.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired, 
  duration: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  rowContainer: {
    flexDirection: 'row'
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 100,
    width: 30,
  },
  title1: {
    fontSize: 14,
  },
  rowDetails: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 4.5,
    paddingLeft: 100,
    fontSize: 14,
  },
  //spacer: {
  //  width: 30,
  //  paddingRight: 70,
  //},
  smaller: {
    color: colors.blue,
    //fontSize: 14,
  },
  smaller1: {
    color: colors.green,    
    paddingLeft: 35,
  },
});
