import { StyleSheet,View, Text } from 'react-native';
import React, { useContext, useEffect} from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './searchBar';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi'
export default function HomeScreen() {

  const{location,setLocation}=useContext(UserLocationContext);

  useEffect(()=>{
    location&&GetNearByPlace();
  },[location])
  const GetNearByPlace=()=>{
    const data={
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
      "circle": {
      "center": {
          "latitude": location?.latitude,
          "longitude": location?.longitude
        },
        "radius": 5000.0
      }
    }
  }
    GlobalApi.NewNearByPlace(data).then(resp=>{
      console.log(resp.data);
    })
  }
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header/>
        {/* {SearchBar({lat:28.64,lon:77.21,searchText:"Evstation"})} */}
        <SearchBar searchedLocation={(location)=>console.log(location)}/>
      </View>
      <AppMapView/>
    </View>
  )
}

const styles=StyleSheet.create({
  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  }
})