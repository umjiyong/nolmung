import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';

import 'react-native-gesture-handler';

const App = () => {
  

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
