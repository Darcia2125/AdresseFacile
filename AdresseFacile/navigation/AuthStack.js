import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import NextUpScreen from '../screens/NextUpScreen';
import  UserInfoScreen from '../screens/UserInfoScreen';
import  UserDetailScreen from '../screens/UserDetailScreen';
import  LocationScreen from '../screens/LocationScreen';
import NextInScreen from '../screens/NextInScreen';
import PictureScreen from '../screens/PictureScreen';
import AdresseScreen from '../screens/AdresseScreen';
import AdresseClassScreen from '../screens/AdresseClassScreen';
import GetAdressScreen from '../screens/GetAdressScreen';
import IndividualScreen from '../screens/IndividualScreen';
import ContactClasseScreen from '../screens/ContactClasseScreen';
import RecupAdresseScreen from '../screens/RecupAdresseScreen';
import ContactRecupScreen from '../screens/ContactRecupScreen';
import Itineraire1Screen from '../screens/Itineraire1Screen';
import Itineraire1NextScreen from '../screens/Itineraire1NextScreen';
import Itineraire1ValidationScreen from '../screens/Itineraire1ValidationScreen';
import ItineraireCarScreen from '../screens/ItineraireCarScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="NextUp" component={NextUpScreen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="NextIn" component={NextInScreen} />
      <Stack.Screen name="Picture" component={PictureScreen} />
      <Stack.Screen name="Adresse" component={AdresseScreen} />
      <Stack.Screen name="AdresseClass" component={AdresseClassScreen} />
      <Stack.Screen name="GetAdress" component={GetAdressScreen} />
      <Stack.Screen name="Individual" component={IndividualScreen} />
      <Stack.Screen name="ContactClasse" component={ContactClasseScreen} />
      <Stack.Screen name="RecupAdresse" component={RecupAdresseScreen} />
      <Stack.Screen name="ContactRecup" component={ContactRecupScreen} />
      <Stack.Screen name="Itineraire1" component={Itineraire1Screen} />
      <Stack.Screen name="Itineraire1Next" component={Itineraire1NextScreen} />
      <Stack.Screen name="Itineraire1Validation" component={Itineraire1ValidationScreen} />
      <Stack.Screen name="ItineraireCar" component={ItineraireCarScreen} />
    </Stack.Navigator>
  );
};


export default AuthStack;
