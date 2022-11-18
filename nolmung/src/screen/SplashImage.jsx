import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashImage = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('userId', (err, res) => {
        console.log(res);
        // navigation.replace(res == null ? 'Login' : 'BottomTabs');
        navigation.navigate('Login');
      });
    }, 1000);
  }, []);

  return (
    <>
      <View style={Styles.SplashContainer}>
        <Image
          source={require('../assets/icons/map_marker3.png')}
          resizeMode="contain"
        />
        <Text style={{fontSize: 36, color: '#fff'}}>놀면 멍!하게</Text>
      </View>
    </>
  );
};

export default SplashImage;

const Styles = StyleSheet.create({
  SplashContainer: {
    backgroundColor: '#FF772F',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
