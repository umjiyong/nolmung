import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


const requestMapPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


function WalkScreen({navigation}) {
  const [location, setLocation] = useState();
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <>
      <View style={Styles.container}>
      {location ? (
        <>
          <Text style={{color:'#282828'}}>Latitude: {location.latitude}</Text>
          <Text style={{color:'#282828'}}>Latitude: {location.longitude}</Text>
        </>
      ) : (
        <>
          <Text style={{color:'#282828'}}>Loading...</Text>
          <Button title="request permissions" onPress={requestMapPermission} />
        </>
      )}
      </View>
    </>
  );
}

export default WalkScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#F5F5F5',
  },
});
