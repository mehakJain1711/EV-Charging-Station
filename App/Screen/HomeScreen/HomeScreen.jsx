import { StyleSheet,View, Text } from 'react-native';
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './searchBar';

export default function HomeScreen() {
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