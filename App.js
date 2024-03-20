import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';

SplashScreen.preventAutoHideAsync();
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={'pk_test_dW5jb21tb24tdmlwZXItNDUuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
    <UserLocationContext.Provider 
    value={{location,setLocation}}>
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>

          </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
      
      <StatusBar style="auto" />
    </View>
    </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:25
  },
});
