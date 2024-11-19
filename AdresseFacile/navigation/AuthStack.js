import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Inscription' }} />
    <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Connexion' }} />
  </Stack.Navigator>
);

export default AuthStack;
