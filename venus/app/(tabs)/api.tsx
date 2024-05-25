// require('dotenv').config();

import Constants from 'expo-constants';

require('dotenv').config();

const LATITUDE = 33.643162;
const LONGITUDE = -117.851143;
const RADIUS = 5000;

const API_KEY = process.env.API_KEY;

// const API_KEY = process.env.API_KEY

const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDE},${LONGITUDE}&radius=${RADIUS}&type=gym&keyword=women%20ladies&key=${API_KEY}`

const params = {
    "includedTypes": ["gym"],
    "maxResultCount": 20,
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": LATITUDE,
          "longitude": LONGITUDE},
        "radius": 2000.0
      }
    }
  }

const getGym = async () => {
    try{
        const fetching = await fetch(url, {
            method: 'POST',
            headers: {
                'X-Goog-FieldMask': 'places.displayName',
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
            } as HeadersInit,
            body: JSON.stringify(params),
            
        }   
        );
        const gyms = await fetching.json();
        console.log(gyms['results'].length);
        // console.log(gyms);
        return gyms;
    }catch(err){
        console.log(err)
    }

    

};

export { getGym };


