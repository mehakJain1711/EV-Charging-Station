import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen';
import Colors from '../Utils/Colors';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreenNav';
import { Feather, AntDesign } from '@expo/vector-icons';
import AddPaymentMethod from '../Screen/ProfileScreen/AddPaymentMethod';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='favourite'
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='profile'
        children={() => <ProfileScreen />}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='paymentMethod'
        component={AddPaymentMethod}
        options={{
          tabBarLabel: 'Payment',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Feather name="credit-card" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
