import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Marker } from 'react-native-maps';

export default function Markers({ place }) {
  useEffect(()=>
  {
    console.log(place)
  },[place])
  return place && (
    <Marker
      coordinate={{
        latitude: place.location?.latitude,
        longitude: place.location?.longitude
      }}
    >
      <Image source={require('./../../../assets/images/location.png')}
          style={{width:12, height:20,}}
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