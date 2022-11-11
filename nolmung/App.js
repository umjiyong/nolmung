import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';
import messaging from '@react-native-firebase/messaging';

import 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
