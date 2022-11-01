import React, {useState, useEffect, useRef} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import Geolocation, {
  getCurrentPosition,
} from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps';
import styled from 'styled-components';
import {Platform, PermissionsAndroid, AppState} from 'react-native';
import useInterval from 'use-interval';
import {getDistance} from 'geolib';

async function requestPermission() {
  try {
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      console.log(Platform.OS);
    }
  } catch (e) {
    console.log(e);
  }
}

async function requestPermission2() {
  try {
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      console.log('back');
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
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
  const [locations, setLocations] = useState([]);
  let [curlocation, setCurlocation] = useState([]);
  const [startlocation, setstartlocation] = useState({});
  const [test, setTest] = useState([]);
  const [distance, setDistance] = useState(0);
  const [flag, setFlag] = useState(0);
  let _watchId;

  useInterval(() => {
    console.log(AppState.currentState);

    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurlocation([
          ...curlocation,
          {latitude: latitude, longitude: longitude},
        ]);
        // setCurlocation({latitude, longitude});

        if (curlocation.length > 2 && flag === 1) {
          console.log(flag);
          let long = getDistance(
            curlocation[curlocation.length - 1],
            curlocation[curlocation.length - 2],
            0.1
          );
          console.log('2초당 거리', long);
          if (long < 4) {
            setDistance(distance + long);

            console.log('거리계산 :', distance);
          } else {
            console.log('속도가 선을 넘엇습니다');
          }
        }
      },
      error => {
        console.log(error);
      },
      {
        maximumAge: 100,
        timeout: 50000,
        enableHighAccuracy: true,
        distanceFilter: 1,
      }
    );
  }, 2000);

  useEffect(() => {
    requestPermission().then(result => {
      if (result === 'granted') {
        requestPermission2().then(console.log('백그라운드성공'));
        console.log('실행');
        Geolocation.watchPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setstartlocation({latitude: latitude, longitude: longitude});
            // setCurlocation({latitude, longitude});
            // console.log(startlocation);
          },
          error => {
            console.log(error);
          },
          {
            maximumAge: 0,
            timeout: 50000,
            enableHighAccuracy: true,
            distanceFilter: 1,
          }
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
  function StartCount() {
    if (flag === 1) {
      setFlag(0);
    } else {
      setFlag(1);
    }
    console.log(flag);
  }

  return (
    <View>
      {/* {console.log(curlocation)} */}
      <Button
        onPress={StartCount}
        title="시작"
        color="#841584"
        style={Styles.buttonTest}
      />
      <Text>이동 거리 : {distance.toFixed(2)}</Text>

      {startlocation.latitude ? (
        <Map
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: startlocation.latitude,
            longitude: startlocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Polyline
            strokeWidth={6}
            strokeColor="#000"
            coordinates={curlocation}
          />
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

const Styles = StyleSheet.create({
  buttonTest: {
    width: '80%',
    height: 70,
  },
});
