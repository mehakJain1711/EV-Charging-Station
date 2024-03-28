import axios from "axios";
const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "YOUR_API-KEY";

const config = {
  Headers: {
    "content-type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.dispayName",
      "places.formattedAddress",
      "places.formattedAddress",
      "places.location",
      "places.evChargerOption",
      "places.photos",
    ],
  },
};

const NewNearByPlaces = (data) => axios.post(BASE_URL, data, config);
export default {
  NewNearByPlaces,
};
