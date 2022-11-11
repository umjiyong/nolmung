import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
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
        console.log("스플래시에서 확인", res);
        navigation.replace(res == null ? 'Login' : 'BottomTabs')
      })
    }, 3000);
  }, []);

    return (
        <>
            <View style={Styles.SplashContainer}>
                <Text>ㅎㅇㅎㅇ</Text>
            </View>
        </>
    )
}

export default SplashImage

const Styles = StyleSheet.create({
    SplashContainer:{
        backgroundColor:'#FF772F'
    }
})