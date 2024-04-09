// import { View, Text, Dimensions,Image,Pressable, ToastAndroid} from 'react-native'
// import React from 'react'
// import GlobalApi from '../../Utils/GlobalApi'
// import { LinearGradient } from 'expo-linear-gradient';
// import Colors from '../../Utils/Colors';
// import { Ionicons } from '@expo/vector-icons';
// import { getFirestore } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore"; 

// export default function PlaceItem({place}) {
//     const PLACE_PHOTO_BASE_URL= "https://places.googleapis.com/v1/";
//     // const db =  getFirestore (app);

//     const onSetFav=async(place)=>
//     {
//       await setDoc(doc(db, "ev-fav-place", (place.id).toString()), 
//       place);
//       ToastAndroid.show('Fav Added!',ToastAndroid.TOP);

//     }
//     console.log("Longitude:", place?.location?.longitude);
//     console.log("Latitude:", place?.location?.latitude);


//   return (
//     <View 
//     style={{
//         backgroundColor:Colors.WHITE,
//         width:Dimensions.get('screen').width*0.9,
//         borderRadius:10,
//         margin:5
        
//     }}
//     >
//       <LinearGradient
//         colors={['transparent','#ffffff','#ffffff']}
//       >
//       <Pressable style={{position:'absolute',right:0,margin:5}} 
//       onPress={()=>onSetFav(place)}>
//       <Ionicons name="heart-circle-outline" size={24} color="black" />
//       </Pressable>
//       <Image
//           source={
//             place?.photos ?
//               { uri: `${PLACE_PHOTO_BASE_URL}${place?.photos[0]?.name}/media?key=${GlobalApi.API_KEY}&maxHeightPx=800&maxWidthPx=1200` }
//               : require('./../../../assets/images/ev-charger.png')
//           }
//           style={{ width: '100%', borderRadius: 10, height: 150, zIndex: -1 }}
//         />
//       <View style={{padding:15}}>
//         <Text style={{
//             fontSize:23,
//             fontFamily:'outfit-medium'
//         }} 
//         >{place.displayName?.text}</Text>
//         <Text style={{
//             color:Colors.GRAY,
//             fontFamily:'outfit'
//         }}>{place?.shortFormattedAddress}</Text>

//         <View style={{
//             marginTop:5,
//         }}>
//         <Text style={{
//             fontFamily:'outfit',
//             color:Colors.GRAY,
//             fontSize:17
//         }}>Connectors</Text>
//         <Text style={{
//             fontFamily:'outfit-medium',
//             fontSize:17,
//             marginTop:2
//         }}>{place?.evChargeOptions?.connectorCount}</Text>
//       </View>
//       </View>
//       </LinearGradient>
//     </View>
//   )
// }

import React from 'react';
import { View, Text, Dimensions, Image, Pressable, ToastAndroid, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import GlobalApi from '../../Utils/GlobalApi';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";

export const PlaceItem = ({ place }) => {
    // const db = getFirestore(app);

    const onSetFav = async (place) => {
        await setDoc(doc(db, "ev-fav-place", (place.id).toString()), place);
        ToastAndroid.show('Fav Added!', ToastAndroid.TOP);
    };

    const navigateToGoogleMaps = () => {
        if (!place || !place.location || !place.location.latitude || !place.location.longitude) {
            console.error("Incomplete or invalid location information:", place?.location);
            Alert.alert('Error', 'Location information is incomplete or invalid.');
            return;
        }

        const { latitude, longitude } = place.location;
        const destinationURL = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

        Linking.canOpenURL(destinationURL).then(supported => {
            if (supported) {
                Linking.openURL(destinationURL);
            } else {
                console.error("Cannot open Google Maps URL:", destinationURL);
                Alert.alert('Error', 'Unable to open Google Maps. Please make sure Google Maps is installed.');
            }
        }).catch(error => {
            console.error("Error opening Google Maps URL:", error);
            Alert.alert('Error', 'An error occurred while opening Google Maps.');
        });
    };



    return (
        <View
            style={{
                backgroundColor: Colors.WHITE,
                width: Dimensions.get('screen').width * 0.9,
                borderRadius: 10,
                margin: 5
            }}
        >
            <LinearGradient
                colors={['transparent', '#ffffff', '#ffffff']}
            >
                <Pressable style={{ position: 'absolute', right: 0, margin: 5 }} onPress={() => onSetFav(place)}>
                    <Ionicons name="heart-circle-outline" size={24} color="black" />
                </Pressable>
                <Image
                    source={
                        place?.photos ?
                            { uri: `${PLACE_PHOTO_BASE_URL}${place?.photos[0]?.name}/media?key=${GlobalApi.API_KEY}&maxHeightPx=800&maxWidthPx=1200` }
                            : require('./../../../assets/images/ev-charger.png')
                    }
                    style={{ width: '100%', borderRadius: 10, height: 150, zIndex: -1 }}
                />
                <View style={{ padding: 15 }}>
                    <Text style={{
                        fontSize: 23,
                        fontFamily: 'outfit-medium'
                    }}>{place.displayName?.text}</Text>
                    <Text style={{
                        color: Colors.GRAY,
                        fontFamily: 'outfit'
                    }}>{place?.shortFormattedAddress}</Text>

                    <View style={{
                        marginTop: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                            fontSize: 17
                        }}>Connectors</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 17,
                            marginTop: 2
                        }}>{place?.evChargeOptions?.connectorCount}</Text>
                    </View>

                    {/* Button for navigation */}
                    {/* <Pressable onPress={navigateToGoogleMaps} style={{ marginTop: 10 }}>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Navigate with Google Maps</Text>
                    </Pressable> */}
                    {/* <MaterialCommunityIcons name="navigation-variant-outline" size={24} color="green" onPress={navigateToGoogleMaps} /> */}
                    <MaterialCommunityIcons name="navigation-variant" size={15} color="green" onPress={navigateToGoogleMaps} style={{ margin: 10,position:'relative' }} />
                </View>
            </LinearGradient>
        </View>
    );
};

export default PlaceItem;
