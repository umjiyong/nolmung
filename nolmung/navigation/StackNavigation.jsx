import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../Screen/LoginScreen';
import CommunityScreen from '../Screen/CommunityScreen';
import FriendScreen from '../Screen/FriendScreen';
import MyProfileScreen from '../Screen/MyProfileScreen';
import WalkDiaryScreen from '../Screen/WalkDiaryScreen';
import WalkScreen from '../Screen/WalkScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={FirstScreen} />
      <Stack.Screen name="WalkScreen" component={WalkScreen} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen name="FriendScreen" component={FriendScreen} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen name="WalkDiaryScreen" component={WalkDiaryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
