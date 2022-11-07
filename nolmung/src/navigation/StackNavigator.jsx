import React from 'react';

import LoginScreen from '../screen/LoginScreen';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import NotiScreen from '../screen/NotiScreen';
import SettingScreen from '../screen/SettingScreen';
import MessageScreen from '../screen/MessageScreen';
import RankingScreen from '../screen/RankingScreen';
import MyProfileModify from '../screen/MyProfileModify';
import AddDogInfo from '../screen/AddDogInfo';
import MyDogInfo from '../screen/MyDogInfo'
import CutOffList from '../screen/CutOffList';
import FriendProfile from '../screen/FriendProfile'
import MessageRoomScreen from '../screen/MessageRoomScreen';
import ArticleItemDetail from '../screen/ArticleItemDetail'
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
      <Stack.Screen name="FriendProfile" component={FriendProfile} />
      <Stack.Screen name="CutOffList" component={CutOffList}
        options={{
          title: 'CutOffList',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}  
      />
      <Stack.Screen name="MessageRoomScreen" component={MessageRoomScreen} />
      <Stack.Screen name="ArticleItemDetail" component={ArticleItemDetail}
        options={{
          title:'ArticleItemDetail',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
        }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
