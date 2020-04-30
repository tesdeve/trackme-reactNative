import uuidv4 from 'uuid/v4';
import moment from "moment";
import capitalize from '../utils/capitalize';

const mapTrip = trip => {
  const {
    id, start_time, name, distance, duration
  } = trip;
  return {
    id: uuidv4(),
    trip_id: id, 
    start: moment(start_time).format("D/MMMM/YYYY  -  h:mm A"),
    name: name, 
    avatar: '../assets/splash.png',
    //favorite: Math.random() >= 0.5, // randomly generate favorite contacts
    distance: distance + 'km',
    duration: duration + 'mins',
  };
};

export const fetchTrips = async () => {
 
  const response = await fetch('http://localhost:3000/trips/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }});
    const tripData = await response.json();

  return tripData.trips.map(mapTrip); //results = trips
};


const mapLocation = location => {
  const {
     id, trip_id, latitude, longitude, logged_at
  } = location;

  //console.log(location)
  return {
    id: uuidv4(),
    trip_id,
    latitude,
    longitude,
    logged_at,   // time: logged_at,
  }
}

export const fetchLocations = async (t_id) => { 
 
  const response = await fetch('http://localhost:3000/trips/'+t_id+'/locations/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }});

    const locationData = await response.json();
   
    return locationData.locations.map(mapLocation); //results = trips
};
