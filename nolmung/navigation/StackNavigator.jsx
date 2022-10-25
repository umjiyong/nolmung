import React from 'react';

import LoginScreen from '../Screen/LoginScreen';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import NotiScreen from '../Screen/NotiScreen';
import SettingScreen from '../Screen/SettingScreen';
import MessageScreen from '../Screen/MessageScreen';
import RankingScreen from '../Screen/RankingScreen';
import MyProfileModify from '../Screen/MyProfileModify';
import AddDogInfo from '../Screen/AddDogInfo';
import MyDogInfo from '../Screen/MyDogInfo'
import CutOffList from '../Screen/CutOffList';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="NotiScreen"
        component={NotiScreen}
        options={{
          title: 'NotiScreen',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'SettingScreen',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="RankingScreen" component={RankingScreen} />
      <Stack.Screen name="MyProfileModify" component={MyProfileModify} />
      <Stack.Screen name="AddDogInfo" component={AddDogInfo} />
      <Stack.Screen name="MyDogInfo" component={MyDogInfo} />
      <Stack.Screen name="CutOffList" component={CutOffList}
        options={{
          title: 'CutOffList',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}  
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
