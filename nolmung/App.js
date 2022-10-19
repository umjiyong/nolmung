import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './navigation/AuthStack';

import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
