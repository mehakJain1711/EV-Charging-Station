// const BASE_URL="https://api.geocode.earth/v1/autocomplete";
// const API_KEY="ge-3e05aee5a2de2f61"

// import axios from 'axios';

// export default function SearchBar({ lat, lon }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
  
//     const handleSearch = async () => {
//       const apiKey = "ge-3e05aee5a2de2f61";
//       const options = {
//         method: 'GET',
//         url: 'https://api.geocode.earth/v1/autocomplete',
//         params: {
//           api_key: apiKey,
//           'focus.point.lat': lat ?? 20.59,
//           'focus.point.lon': lon ?? 78.96,
//           text: searchTerm
//         },
//       };
  
//       try {
//         const response = await axios.request(options);
//         setSearchResults(response.data.features); // Set the search results state variable with the response data
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     useEffect(() => {
//       // You can include additional logic here if needed
//     }, [searchResults]);
  
//     const handleLocationSelect = (location) => {
//       console.log("Selected Location Latitude:", location?.geometry?.coordinates[1]);
//       console.log("Selected Location Longitude:", location?.geometry?.coordinates[0]);
//       // Additional logic if needed
//     };
  
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder='Search EV Charging Station'
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//         />
//         <Button title="Search" onPress={handleSearch} />
//         {searchResults && searchResults.length ? searchResults.map(function (location) {
//           return (
//             <TouchableOpacity key={location.id} onPress={() => handleLocationSelect(location)}>
//               <Text>
//                 {location?.properties?.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         }) : <Text>No results found!</Text>}
//       </View>
//     );
//   }
  