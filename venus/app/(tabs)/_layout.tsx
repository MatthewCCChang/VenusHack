import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from './SignInPage'; // Ensure the correct import path
import ProfileSetUp from '../../components/onboarding/ProfileSetUp'; // Ensure the correct import path
import Start from './Start'; // Ensure the correct import path
import Home from './Home'; // Ensure the correct import path
import FirstPage from '../../components/onboarding/fifthPage';
import Map from './explore';
import LoginPage from './LoginPage.js';
import Card from './card';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // This ensures no headers are shown
        animationEnabled: false, // Disable transitions between screens
      }}
      initialRouteName="Map" //change back later
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignIn" component={SignInPage} />
      <Stack.Screen name="SignUp" component={ProfileSetUp} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Map" component={Map}/>
      </Stack.Navigator>
      
    </Stack.Navigator>
  );
}