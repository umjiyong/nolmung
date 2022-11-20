import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MyWalkRecord from '../components/MyWalkRecord';
import WalkStatistic from '../components/WalkStatistic';
function WalkDiaryScreen({navigation}) {
  const [select, setSelect] = useState('myWalk');
  const onPressMyWalk = () => {
    setSelect('myWalk');
    console.log(select);
  };
  const onPressWalkStatistic = () => {
    setSelect('walkStatistic');
    console.log(select);
  };

  return (
    <>
      {/* Start WalkDiary Header */}
      <Header HeaderName="산책일지" />
      {/* END WalkDiary Header */}
      <View style={Styles.container}>
        <View style={Styles.selectBox}>
          <TouchableOpacity
            onPress={onPressMyWalk}
            style={
              select == 'myWalk' ? Styles.bottomBorder : Styles.selectTextHuman
            }>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: '#282828',
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                내 산책 기록
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressWalkStatistic}
            style={
              select == 'walkStatistic'
                ? Styles.bottomBorder
                : Styles.selectTextHuman
            }>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: '#282828',
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                산책 통계
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {select == 'myWalk' ? (
          <>
            <MyWalkRecord />
          </>
        ) : (
          <>
            <WalkStatistic />
          </>
        )}
      </View>
    </>
  );
}

export default WalkDiaryScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  selectBox: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  selectTextHuman: {
    // borderBottomColor: 'gray',
    // borderBottomWidth: 2,
    width: '50%',
  },

  bottomBorder: {
    borderBottomColor: '#FF8544',
    borderBottomWidth: 1.5,
    width: '50%',
  },
});
