import React, {useState, useEffect, useRef} from 'react';
import {Button, Text} from 'react-native';
import Geolocation, {
  getCurrentPosition,
} from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps';
import styled from 'styled-components';
import {Platform, PermissionsAndroid} from 'react-native';
import useInterval from 'use-interval';

async function requestPermission() {
  try {
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      console.log(Platform.OS);
    }
  } catch (e) {
    console.log(e);
  }
}

// useEffect(() => {
//   requestPermission().then(result => {
//     if (result === "granted") {

//     }
//   });
// }, []);

function WalkScreen({navigation}) {
  requestPermission();
  const [locations, setLocations] = useState([]);
  let [curlocation, setCurlocation] = useState([]);
  const [startlocation, setstartlocation] = useState({});
  const [test, setTest] = useState([]);
  let _watchId;

  // useInterval(() => {
  //   console.log(1);
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  //       setCurlocation([
  //         ...curlocation,
  //         {latitude: latitude, longitude: longitude},
  //       ]),
  //         // setCurlocation({latitude, longitude});
  //         console.log(latitude, longitude);
  //       console.log('버튼 안쪽', curlocation);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     {
  //       maximumAge: 100,
  //       timeout: 50000,
  //       enableHighAccuracy: true,
  //       distanceFilter: 1,
  //     },
  //   );
  // }, 2000);

  // setInterval(() => {
  //   setTest([...test, 'a']);
  //   console.log(test);
  // }, 2000);

  useEffect(() => {
    requestPermission().then(result => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setstartlocation({latitude: latitude, longitude: longitude});
            // setCurlocation({latitude, longitude});
            console.log(startlocation);
          },
          error => {
            console.log(error);
          },
          {
            maximumAge: 100,
            timeout: 50000,
            enableHighAccuracy: true,
            distanceFilter: 1,
          },
        );
      }
    });
  }, []);

  // useEffect(() => {
  //   return () => {
  //     if (_watchId !== null) {
  //       console.log('finish');
  //       Geolocation.clearWatch(_watchId);
  //     }
  //   };
  // }, []);

  return (
    <View>
      {/* <Button title="현재위치" onPress={CurrentPosition} /> */}
      {/* {console.log(startlocation.latitude)}
      {curlocation.length > 0 && (
    
      )} */}
      {console.log(startlocation.latitude)}

      {startlocation.latitude ? (
        <Map
          style={{flex: 1}}
          initialRegion={{
            latitude: startlocation.latitude,
            longitude: startlocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* <Polyline
            strokeWidth={6}
            strokeColor="#000"
            coordinates={curlocation}
          /> */}
        </Map>
      ) : (
        <Text>로딩중...</Text>
      )}
    </View>
  );
}

const View = styled.View`
  flex: 1;
`;

// const Text = styled.Text`
//   flex: 1;
// `;

const Map = styled(MapView)`
  flex: 1;
`;

export default WalkScreen;
