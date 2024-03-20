import { StyleSheet, View, Text,Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useContext } from 'react'
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {


  const {location,setLocation}= useContext(UserLocationContext);
  return location?.latitude&&(
    <View>
      <MapView 
      style={styles.map}
      customMapStyle={MapViewStyle} 
      region={{
        latitude:location?.latitude,
        longitude:location?.longitude,
        lattitudeDelta:0.0422,
        longitudeDelta:0.0421
      }}
      
      >
        <Marker
          coordinate={{
            latitude:location?.latitude,
            longitude:location?.longitude
          }}
        >
          <Image source={require('./../../../assets/images/car-marker.png')}
          style={{width:30, height:70,}}
          />
          </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });