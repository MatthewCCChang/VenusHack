require('dotenv').config();

const LATITUDE = 33.643162
const LONGITUDE = -117.851143
const RADIUS = 5000

const API_KEY = process.env.API_KEY

const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDE},${LONGITUDE}&radius=${RADIUS}&type=gym&keyword=women%20ladies&key=${API_KEY}`

const params = {}
