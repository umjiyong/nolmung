import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CommunityScreen from '../screen/CommunityScreen';
import FriendScreen from '../screen/FriendScreen';
import MyProfileScreen from '../screen/MyProfileScreen';
import WalkDiaryScreen from '../screen/WalkDiaryScreen';
import WalkScreen from '../screen/WalkScreen';
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
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
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
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 10}}>
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
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 10}}>
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
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{
                  color: focused ? '#FF772F' : '#959595',
                  fontSize: 10,
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
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 10}}>
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
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#FF772F' : '#959595',
                }}
              />
              <Text
                style={{color: focused ? '#FF772F' : '#959595', fontSize: 10}}>
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
    elevation: 7,
  },
});

export default BottomTabs;
