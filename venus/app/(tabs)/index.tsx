import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './_layout'; // Ensure the correct import path

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
