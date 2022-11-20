import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MiddleHeader from '../components/MiddleHeader';

const EndWalkScreen = () => {
  return (
    <>
      <MiddleHeader header="내 산책 기록" />
      <Image
        source={require('../assets/icons/imageBg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 200,
        }}
      />
      <View style={Styles.Container}>
        <View style={Styles.box}>
          <Text style={{color: '#282828', fontSize: 16, textAlign: 'center'}}>
            산책한 거리
          </Text>
          <Text style={{color: '#FF772F', fontSize: 18, textAlign: 'center'}}>
            {' '}
            100M{' '}
          </Text>
        </View>
        <View style={Styles.box}>
          <Text style={{color: '#282828', fontSize: 16, textAlign: 'center'}}>
            산책한 시간
          </Text>
          <Text style={{color: '#FF772F', fontSize: 18, textAlign: 'center'}}>
            {' '}
            10분{' '}
          </Text>
        </View>
        <View style={Styles.box}>
          <Text style={{color: '#282828', fontSize: 16, textAlign: 'center'}}>
            산책 달성률
          </Text>
          <Text style={{color: '#FF772F', fontSize: 18, textAlign: 'center'}}>
            {' '}
            80%{' '}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          alignItems: 'center',
        }}>
        {/* 사진 */}
        <Pressable
          style={{
            backgroundColor: '#959595',
            width: '100%',
            height: 200,
          }}>
          <View
            style={{
              backgroundColor: '#959595',
              width: '100%',
              height: 200,
            }}></View>
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          marginTop: 'auto',
          marginBottom: 50,
        }}>
        <Pressable
          style={{
            paddingVertical: 13,
            paddingHorizontal: 37,
            backgroundColor: '#FF772F',
            borderRadius: 18,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>산책 등록</Text>
        </Pressable>
      </View>
    </>
  );
};

export default EndWalkScreen;

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#959595',
    elevation: 5,
  },
});
