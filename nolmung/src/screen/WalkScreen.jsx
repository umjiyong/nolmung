import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  View,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Geolocation, {
  getCurrentPosition,
} from 'react-native-geolocation-service';
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  Circle,
} from 'react-native-maps';
import {Platform, PermissionsAndroid, AppState} from 'react-native';
// import useInterval from 'use-interval';
import {getDistance} from 'geolib';
import useInterval from 'react-useinterval';
// import BackgroundTimer from 'react-native-background-timer';
// import {AppRegistry} from 'react-native';
import {getNearLandmarkMarkerList, getMyPuppyList} from '../api/Walk.js';
import WalkPuppyList from '../components/WalkPuppyList.jsx';
import moment, {min} from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

async function requestPermission() {
  try {
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      // console.log(Platform.OS);
    }
  } catch (e) {
    console.log(e);
  }
}

async function requestPermission2() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
      {
        title: '위치 권한',
        message: '앱 위치 정보를 항상 허용해주세요!',
        buttonNeutral: '나중에',
        buttonNegative: '거부',
        buttonPositive: '승인',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location in background');
      return true;
    } else {
      console.log('Location permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}

function WalkScreen({navigation}) {
  let [curlocation, setCurlocation] = useState([
    {
      latitude: 0,
      longitude: 0,
    },
  ]);
  let [circleLocation, setCircleLocation] = useState([
    {
      latitude: 0,
      longitude: 0,
    },
  ]);
  const [startlocation, setstartlocation] = useState({});
  const [distance, setDistance] = useState(0);
  const [flag, setFlag] = useState(0);
  const [ondo, setondo] = useState(10);
  const [weathers, setweathers] = useState('');
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [speed, setspeed] = useState(0);
  const appState = useRef(AppState.currentState);
  const [landmark, setLandmark] = useState([]);
  const accessableLength = 200; // 사용자 원의 반경, 접근할 수 있는 랜드마크까지의 거리
  const [myPuppyList, setMyPuppyList] = useState([]);
  const [checkPuppy, setCheckPuppy] = useState([]);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const requestData = {
    startTime: startTime,
    endTime: new Date().toJSON(),
    // userId: AsyncStorage.getItem('userId'),
    userId: 1,
    walkDistance: distance,
    puppyList: checkPuppy,
    min: min,
    sec: sec,
  };

  // const getLandmarkMarkerListFunc = async () => {
  //   try {
  //     await getLandmarkMarkerList(
  //       response => {
  //         setLandmark(response.data.landmarkList);
  //       },
  //       err => {
  //         console.log('랜드마크 목록 에러', err);
  //       },
  //     );
  //   } catch (error) {
  //     // console.log(err);
  //     console.log('랜드마크 목록 조회 에러');
  //   }
  // };

  const getNearLandmarkMarkerListFunc = async (userLat, userLon) => {
    // console.log('현재 위치 ', userLat, userLon);
    try {
      await getNearLandmarkMarkerList(
        {
          userLat: userLat,
          userLon: userLon,
        },
        response => {
          // console.log('!!!!', response.data);
          setLandmark(response.data.landmarkList);
        },
        err => {
          console.log('랜드마크 목록 에러', err);
        },
      );
    } catch (error) {
      // console.log(err);
      console.log('랜드마크 목록 조회 에러');
    }
  };

  const getPuppyListFunc = async userId => {
    try {
      await getMyPuppyList(
        {
          userId: 1,
        },
        response => {
          // console.log(response.data.myPuppyList);
          setMyPuppyList(response.data.myPuppyList);
        },
      );
    } catch (error) {
      console.log(err);
      console.log('강아지 목록 조회 에러');
    }
  };

  // console.log('거리', distance);
  // console.log('시작시간', startTime);

  useInterval(() => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurlocation([
          ...curlocation,
          {latitude: latitude, longitude: longitude},
        ]);
        setCircleLocation([
          ...circleLocation,
          {latitude: latitude, longitude: longitude},
        ]);

        if (curlocation.length > 2 && flag === 1) {
          // console.log(flag);
          let long = getDistance(
            curlocation[curlocation.length - 1],
            curlocation[curlocation.length - 2],
            0.1,
          );
          setspeed(long);
          // console.log('2초당 거리', long);
          if (long < 4) {
            setDistance(distance + long);

            // console.log('거리계산 :', distance);
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
      },
    );
    if (flag === 1 && speed < 4) {
      if (sec !== 59) {
        setsec(sec + 1);
      } else {
        setsec(0);
        setmin(min + 1);
      }
    }
  }, 1000);

  useEffect(() => {
    requestPermission().then(result => {
      if (result === 'granted') {
        requestPermission2();
        console.log('실행');

        Geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude, longitude);
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
          },
        );
      }
    });
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const API_KEY = 'f2defff7944dd4ae7c6c13961b8ab82a';

      // console.log(`You live in ${latitude} and ${longitude}`);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
      )
        .then(response => response.json())
        .then(data => {
          setondo(data.main.temp);
          setweathers(data.weather[0].main);
        });
    });
  }, []);

  useEffect(() => {
    getPuppyListFunc(1);
  }, []);

  function StartCount() {
    if (flag === 1) {
      setFlag(0);
    } else {
      setFlag(1);
    }
    console.log(flag);
  }

  useEffect(() => {
    getNearLandmarkMarkerListFunc(
      curlocation[curlocation.length - 1].latitude,
      curlocation[curlocation.length - 1].longitude,
    );
  }, [curlocation]);

  // 위,경도 좌표 2개 사이의 거리를 구하는 메서드
  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var r = 6371; //지구의 반지름(km)
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    return Math.round(d * 1000);
  }

  // 거리를 구해서 일정 범위 이내인지 판단하는 메서드
  function getLandmarkAccessibility(landmark) {
    var myLat = circleLocation[circleLocation.length - 1].latitude;
    var myLng = circleLocation[circleLocation.length - 1].longitude;
    var landmarkLat = landmark.latitude;
    var landmarkLng = landmark.longitude;

    if (
      getDistanceFromLatLonInKm(myLat, myLng, landmarkLat, landmarkLng) <=
      accessableLength
    )
      return true;
    return false;
  }

  return (
    <>
      <View style={{flex: 1}}>
        {startlocation.latitude && ondo ? (
          <>
            {speed > 4 ? <Text>이동속도가 너무 빠릅니다</Text> : null}
            <MapView
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
              {landmark?.map((landmark, index) => (
                <Marker
                  key={`landmark-${index}`}
                  coordinate={{
                    latitude: landmark.latitude,
                    longitude: landmark.longitude,
                  }}
                  image={require('../assets/icons/map_marker64.png')}
                  onPress={() => {
                    // console.log(landmark.landmarkId, '번 랜드마크');
                    if (getLandmarkAccessibility(landmark)) {
                      navigation.push('LandmarkScreen', {
                        landmarkId: landmark.landmarkId,
                      });
                    } else {
                      alert('접근할 수 없는 거리에 위치한 랜드마크입니다.');
                    }
                  }}
                />
              ))}
              <Circle
                center={{
                  latitude: circleLocation[circleLocation.length - 1].latitude,
                  longitude:
                    circleLocation[circleLocation.length - 1].longitude,
                }}
                radius={accessableLength}
                strokeWidth={3}
                strokeColor="#FF772F"
                fillColor="rgba(255,255,0,0.2)"
              />
            </MapView>
            {flag === 0 ? (
              <TouchableOpacity
                onPress={() => {
                  StartCount();
                  setStartTime(new Date().toJSON());
                }}
                style={Styles.buttonTest}>
                <Text style={{color: '#fff'}}>산책 시작</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  StartCount();
                  navigation.push('EndWalkScreen', {requestData});
                }}
                style={Styles.buttonTestStop}>
                <Text style={{color: '#fff'}}>산책 종료</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <Text>로딩중...</Text>
        )}
      </View>
      <View style={Styles.weatherBox}>
        <Text
          style={{
            color: '#282828',
            fontWeight: '600',
            textAlign: 'center',
            fontSize: 15,
          }}>
          오늘의 날씨
        </Text>
        <Text
          style={{
            color: '#FF772F',
            fontWeight: '700',
            textAlign: 'center',
            fontSize: 20,
          }}>
          {ondo.toFixed(1)}°C
        </Text>
      </View>
      {flag === 1 ? (
        <View style={Styles.walkInfo}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#282828', fontWeight: '600'}}>
              산책한 거리
            </Text>
            <Text
              style={{
                color: '#FF772F',
                fontSize: 20,
                fontWeight: '700',
                marginTop: 4,
              }}>
              {distance.toFixed(1)}m
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#282828', fontWeight: '600'}}>
              산책한 시간
            </Text>
            <Text
              style={{
                color: '#FF772F',
                fontSize: 20,
                fontWeight: '700',
                marginTop: 4,
              }}>
              {min}분 {sec}초
            </Text>
          </View>
        </View>
      ) : null}
      <View style={{position: 'absolute', right: 20, top: 80}}>
        {myPuppyList.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                console.log('퍼피아이디', item.puppyId);
                if (!checkPuppy.includes(item.puppyId)) {
                  setCheckPuppy([...checkPuppy, item.puppyId]);
                } else {
                  checkPuppy.splice(checkPuppy.indexOf(item.puppyId), 1);
                }
              }}
              key={index}>
              <Image
                source={{uri: item.puppyInfo.puppyImg}}
                resizeMode="contain"
                style={
                  checkPuppy.includes(item.puppyId)
                    ? Styles.selectPuppy
                    : Styles.noSelectPuppy
                }
              />
            </Pressable>
          );
        })}
      </View>
    </>
  );
}

// const View = styled.View`
//   flex: 1;
// `;

// const Map = styled(MapView)`
//   flex: 1;
// `;

export default WalkScreen;

const Styles = StyleSheet.create({
  buttonTest: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff772f',
    marginTop: 'auto',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 100,
    width: '90%',
    shadowColor: '#D9D9D9',
    elevation: 4,
  },
  buttonTestStop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff772f',
    marginTop: 'auto',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 100,
    width: '90%',
    shadowColor: '#D9D9D9',
    elevation: 4,
  },
  weatherBox: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 10,
    left: 50,
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 3,
  },
  walkInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 150,
    left: 20,
    right: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#D9D9D9',
    elevation: 4,
  },
  selectPuppy: {
    width: 60,
    height: 60,
    borderColor: '#FF772F',
    borderWidth: 2,
    borderRadius: 100,
    marginVertical: 5,
  },
  noSelectPuppy: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginVertical: 5,
  },
});
