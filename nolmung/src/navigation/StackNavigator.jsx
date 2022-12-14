import React from 'react';

import LoginScreen from '../screen/LoginScreen';
import SignIn from '../screen/Test';
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
import MyDogInfo from '../screen/MyDogInfo';
import CutOffList from '../screen/CutOffList';
import FriendProfile from '../screen/FriendProfile';
import MessageRoomScreen from '../screen/MessageRoomScreen';
import ArticleItemDetail from '../screen/ArticleItemDetail';
import NewArticle from '../screen/NewArticle';
import SearchFriendList from '../screen/SearchFriendList';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashImage from '../screen/SplashImage';
import NewUserInfo from '../screen/NewUserInfo';
import NewUserPetInfo from '../screen/NewUserPetInfo';
import LandmarkScreen from '../screen/LandmarkScreen';
import VisitArticleItem from '../screen/VisitArticleItem';
import NewGuestBook from '../screen/NewGuestBook';
import EndWalkScreen from '../screen/EndWalkScreen';
import MyArticle from '../screen/MyArticle';
import MyProfileScreen from '../screen/MyProfileScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="SplashImg" component={SplashImage} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="NewUserInfo" component={NewUserInfo} />
      <Stack.Screen name="NewUserPetInfo" component={NewUserPetInfo} />
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
      <Stack.Screen name="LandmarkScreen" component={LandmarkScreen} />
      <Stack.Screen name="VisitArticleItem" component={VisitArticleItem} />
      <Stack.Screen name="MyProfileModify" component={MyProfileModify} />
      <Stack.Screen name="AddDogInfo" component={AddDogInfo} />
      <Stack.Screen name="MyDogInfo" component={MyDogInfo} />
      <Stack.Screen name="FriendProfile" component={FriendProfile} />
      <Stack.Screen
        name="CutOffList"
        component={CutOffList}
        options={{
          title: 'CutOffList',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="MessageRoomScreen" component={MessageRoomScreen} />
      <Stack.Screen
        name="SearchFriendList"
        component={SearchFriendList}
        options={{
          title: 'ArticleItemDetail',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="ArticleItemDetail"
        component={ArticleItemDetail}
        options={{
          title: 'ArticleItemDetail',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen name="NewArticle" component={NewArticle} />
      <Stack.Screen name="NewGuestBook" component={NewGuestBook} />
      <Stack.Screen name="EndWalkScreen" component={EndWalkScreen} />
      <Stack.Screen name="MyArticle" component={MyArticle} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
