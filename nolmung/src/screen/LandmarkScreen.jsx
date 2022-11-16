import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import GoBackHeader from '../components/GoBackHeader';
import VisitMemo from '../components/VisitMemo';
import Visitors from '../components/Visitors';

function LandmarkScreen({navigation}) {
  return (
    <>
      <GoBackHeader />

      <View style={{flex: 1}}>
        {/* Header start */}
        <View style={style.Header}>
          <Text style={{color: '#282828', fontWeight: '600', fontSize: 18}}>
            하늘 공원
          </Text>
          <Image
            source={require('../assets/icons/Vector.png')}
            resizeMode="contain"
          />
        </View>
        {/* Header End */}
        {/* 이미지 */}
        <Image
          source={require('../assets/icons/background.png')}
          resizeMode="cover"
          style={{
            width: '100%',
          }}
        />
        <View
          style={{justifyContent: 'center', paddingLeft: 20, marginTop: 10}}>
          <Text
            style={{
              color: '#282828',
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            방문한 사람
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
            <Visitors />
          </ScrollView>
        </View>
        <View style={style.memo}>
          <Text style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
            방명록
          </Text>
          <Pressable style={style.writebtn}>
            <Text style={{color: '#fff', fontWeight: '500'}}>글쓰기</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{padding: 20}}>
          <VisitMemo />
          <VisitMemo />
          <VisitMemo />
          <VisitMemo />
          <VisitMemo />
          <VisitMemo />
        </ScrollView>
      </View>
    </>
  );
}

export default LandmarkScreen;

const style = StyleSheet.create({
  Header: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  memo: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  writebtn: {
    backgroundColor: '#ff772f',
    paddingVertical: 4,
    paddingHorizontal: 13,
    marginTop: 5,
    borderRadius: 10,
  },
});
