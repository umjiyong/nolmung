import React from 'react';

import LoginScreen from '../Screen/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
