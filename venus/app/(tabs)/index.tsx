import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './_layout'; // Ensure the correct import path

export default function HomeScreen() {
  const handleAddGym = () => {
    const name = 'Fitness Center';
    const location = '123 Main St';
    // const capacity = 100;
    routes.addGym("112312", name, location, 5);
  };

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
