import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const AppNavigator = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default AppNavigator;
