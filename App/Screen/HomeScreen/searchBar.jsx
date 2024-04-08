import { View, StyleSheet } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar({searchedLocation}) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search EV Charging Station'
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          console.log('Location', details.geometry?.location);
          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: 'AIzaSyCRZqpazh_5eX-gPdU76ZVMuCTHjtsh99c',
          language: 'en',
        }}
      />
    </View>
  );
}

















// import { View, StyleSheet, TextInput, Button, Text ,TouchableOpacity} from 'react-native';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function SearchBar({ lat, lon }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     const apiKey = "ge-3e05aee5a2de2f61";
//     const options = {
//       method: 'GET',
//       url: 'https://api.geocode.earth/v1/autocomplete',
//       params: {
//         api_key: apiKey,
//         'focus.point.lat': lat ?? 20.59,
//         'focus.point.lon': lon ?? 78.96,
//         text: searchTerm
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       setSearchResults(response.data.features); // Set the search results state variable with the response data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // You can include additional logic here if needed
//   }, [searchResults]);

//   const handleLocationSelect = (location) => {
//     console.log("Selected Location Latitude:", location?.geometry?.coordinates[1]);
//     console.log("Selected Location Longitude:", location?.geometry?.coordinates[0]);
//     // Additional logic if needed
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder='Search EV Charging Station'
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       <Button title="Search" onPress={handleSearch} />
//       {searchResults && searchResults.length ? searchResults.map(function (location) {
//         return (
//           <TouchableOpacity key={location.id} onPress={() => handleLocationSelect(location)}>
//             <Text>
//               {location?.properties?.label}
//             </Text>
//           </TouchableOpacity>
//         );
//       }) : <Text>No results found!</Text>}
//     </View>
//   );
// }





























// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function SearchBar({lat,lon}) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState();

//   const handleSearch = async () => {
//     const apiKey = "ge-3e05aee5a2de2f61";
//     const options = {
//       method: 'GET',
//       url: 'https://api.geocode.earth/v1/autocomplete',
//       params: {
//         api_key:apiKey,
//         'focus.point.lat' : lat ?? 20.59,
//         'focus.point.lon' : lon ?? 78.96,
//         text:searchTerm
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       setSearchResults(response.data.features); // Set the search results state variable with the response data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(()=>{
//   },[searchResults])

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder='Search EV Charging Station'
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       <Button title="Search" onPress={handleSearch} />
//       {searchResults && searchResults.length ? searchResults.map(function (location){
//         console.log(location)
//         return <Text>
//           {location?.properties?.label}
//         </Text>
//       }):<Text>No results found!</Text>}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    marginTop: 10, // Adjust this value according to the height of your header
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  '.location-card':{
    backgroundColor : "white",
    border : '1px solid black',
    padding:'8px'
  }
});

























// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://place-autocomplete1.p.rapidapi.com/autocomplete/json',
//       params: {
//         input: searchTerm,
//         radius: '500'
//       },
//       headers: {
//         'X-RapidAPI-Key': 'f4927b6defmsh49f71defd251831p190c68jsn974568166eee',
//         'X-RapidAPI-Host': 'place-autocomplete1.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setSearchResults(response.data.predictions);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder='Search EV Charging Station'
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       <Button title="Search" onPress={handleSearch} />
//       {/* Render search results here */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10, // Adjust this value according to the height of your header
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });



