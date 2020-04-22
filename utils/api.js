import uuidv4 from 'uuid/v4';

import capitalize from '../utils/capitalize';

const mapContact = contact => {
  const {
    id, start_time, name, distance, duration
  } = contact;

  return {
    id: uuidv4(),
    trip_id: id, 
    start: start_time,
    name: name, 
    avatar: '../assets/splash.png',
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
    cell: 'Distance: ' + distance,
    email: 'Duration: ' + duration + 'mins',
  };
};

export const fetchContacts = async () => {
  //const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  

  const response = await fetch('http://localhost:3000/trips/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }});

    const contactData = await response.json();


  return contactData.trips.map(mapContact); //results = trips
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};
