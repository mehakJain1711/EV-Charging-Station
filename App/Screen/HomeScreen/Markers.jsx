import React, { useContext, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { selectMarkerContext } from '../../Context/SelectMarkerContext';

export default function Markers({index,place }) {
  useEffect(()=>
  {
    console.log(place)
  },[place])
  const {selectedMarker,setSelectedMarker}=useContext(selectMarkerContext)
  return place && (
    <Marker
      coordinate={{
        latitude: place.location?.latitude,
        longitude: place.location?.longitude
      }}
      onPress={() => setSelectedMarker(index) }
      // onPress={() => console.log("Marker Index:", index)}
    >
    
      <Image source={require('./../../../assets/images/location.jpeg')}
          style={{width:30, height:30,}}
      />
    </Marker>
  );
}
























// import { View, Text } from 'react-native'
// import React from 'react'
// import {Marker} from 'react-native-maps'

// export default function Markers({place}) {
//   return place&& (
    
//       <Marker
//           coordinate={{
//             latitude:place.location?.latitude,
//             longitude:place.location?.longitude
//           }}
//         >
//           {/* <Image source={require('./../../../assets/images/location.png')}
//           style={{width:30, height:70,}}
//           /> */}
    
//           </Marker>
        

//   )
// }