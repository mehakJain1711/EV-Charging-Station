import { View, StyleSheet } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search EV Charging Station'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10, // Adjust this value according to the height of your header
    justifyContent: 'center',
  },
})