import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CommunityScreen from '../Screen/CommunityScreen';
import FriendScreen from '../Screen/FriendScreen';
import MyProfileScreen from '../Screen/MyProfileScreen';
import WalkDiaryScreen from '../Screen/WalkDiaryScreen';
import WalkScreen from '../Screen/WalkScreen';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [Login, setLogin] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="산책하기"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: `absolute`,
          bottom: 25,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 50,
          paddingRight: 12,
          paddingLeft: 12,

          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="커뮤니티"
        component={CommunityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/community.png')}
                resizeMode="contain"
                style={{
                  marginTop: 3,
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 8}}>
                커뮤니티
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="산책일지"
        component={WalkDiaryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/calendar.png')}
                resizeMode="contain"
                style={{
                  marginTop: 3,
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 8}}>
                산책일지
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="산책하기"
        component={WalkScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/dog-solid-24.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{
                  color: focused ? '#FF772F' : '#959595',
                  fontSize: 8,
                }}>
                산책하기
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="친구"
        component={FriendScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/friend.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 8}}>
                친구
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={MyProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/profile.png')}
                resizeMode="contain"
                style={{
                  marginTop: 3,
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 8}}>
                프로필
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    elevation: 10,
  },
});

export default BottomTabs;
