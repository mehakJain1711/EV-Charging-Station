import { View, Text, Dimensions,Image,Pressable, ToastAndroid,Platform,Alert, Linking} from 'react-native'
import React from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {app} from '../../Utils/Firebaseconfig';
import {useUser} from '@clerk/clerk-expo';
import { deleteDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function PlaceItem({place,isFav,markedFav}) {
    const PLACE_PHOTO_BASE_URL= "https://places.googleapis.com/v1/";
    const navigation = useNavigation(); // Get navigation object using useNavigation hook

    const navigateToAddPaymentMethod = (placeAddress) => {
      navigation.navigate('paymentMethod', { placeAddress });
  };
  
    const db =  getFirestore (app);
    const {user}=useUser();
    const onSetFav=async(place)=>
    {
      await setDoc(doc(db, "ev-fav-place", (place.id).toString()),{
      Place:place,
      email:user?.primaryEmailAddress?.emailAddress
    }
    );
      markedFav()
      if (Platform.OS === 'android') {
        ToastAndroid.show('fav added!', ToastAndroid.TOP);
      } else {
        Alert.alert('Message', 'Fav added!');
      }
    }
    
    const onRemoveFav=async(placeId)=>
    {
      
      await deleteDoc(doc(db, "ev-fav-place", placeId.toString()));
      if (Platform.OS === 'android') {
        ToastAndroid.show('fav added!', ToastAndroid.TOP);
      } else {
        Alert.alert('Message', 'Fav Removed!');
      }
      markedFav()
    }


    const navigateToGoogleMaps = () => {
      if (!place || !place.location || !place.location.latitude || !place.location.longitude) {
          console.error("Incomplete or invalid location information:", place?.location);
          Alert.alert('Error', 'Location information is incomplete or invalid.');
          return;
      }

      const { latitude, longitude } = place.location;
      const destinationURL = 'https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}';

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
        backgroundColor:Colors.WHITE,
        width:Dimensions.get('screen').width*0.9,
        borderRadius:10,
        margin:5
        
    }}
    >
      <LinearGradient
        colors={['transparent','#ffffff','#ffffff']}
      >
  
  {isFav ? (
  <Pressable
    style={{ position: 'absolute', right: 0, margin: 5 }}
    onPress={() => onRemoveFav(place.id)}
  >
    <Ionicons name="heart-circle-outline" size={24} color="red" />
  </Pressable>
) : (
  <Pressable
    style={{ position: 'absolute', right: 0, margin: 5 }}
    onPress={() => onSetFav(place)}
  >
    <Ionicons name="heart-circle-outline" size={24} color="black" />
  </Pressable>
)}










      {/* {!isFav? <Pressable style={{position:'absolute',right:0,margin:5}} 
      onPress={()=>onSetFav(place)}>
      <Ionicons name="heart-circle-outline" size={24} color="black" />
      </Pressable>:
      <Pressable style={{position:'absolute',right:0,margin:5}} 
      onPress={()=>onRemoveFav(place.id)}>
      <Ionicons name="heart-circle-outline" size={24} color="red" />
      </Pressable>} */}

    

      <Image
          source={
            place?.photos ?
              { uri: `${PLACE_PHOTO_BASE_URL}${place?.photos[0]?.name}/media?key=${GlobalApi.API_KEY}&maxHeightPx=800&maxWidthPx=1200` }
              : require('./../../../assets/images/ev-charger.png')
          }
          style={{ width: '100%', borderRadius: 10, height: 150, zIndex: -1 }}
        />
      <View style={{padding:15}}>
        <Text style={{
            fontSize:23,
            fontFamily:'outfit-medium'
        }} 
        >{place.displayName?.text}</Text>
        <Text style={{
            color:Colors.GRAY,
            fontFamily:'outfit'
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
                    <Pressable  style={{ marginTop: 10 }}>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Navigate with Google Maps</Text>
                    </Pressable> 
                     <MaterialCommunityIcons name="navigation-variant-outline" size={24} color="green" onPress={navigateToGoogleMaps} />
                    {/* <MaterialCommunityIcons name="navigation-variant" size={15} color="green" onPress={navigateToGoogleMaps} style={{ margin: 10,position:'relative' }} /> */}
                    
                    {/* Render payment button */}
                    <Pressable style={{ marginTop: 10 }} onPress={() => navigateToAddPaymentMethod(place.displayName?.text)}>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Add Payment Method</Text>
                        <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color="green" />
                    </Pressable>

                </View>
            </LinearGradient>
        </View>
    );
};



