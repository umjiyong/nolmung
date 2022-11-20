import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NotiItem from '../components/NotiItem';
import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../components/GoBackHeader';
import {getAlarmList, updateAlarmRead} from '../api/Alarm';

const NotiScreen = () => {
  const [alarmList, setAlarmList] = useState([]);
  let readAlarmList = [];

  function printAlarmList() {
    let result = [];
    for (let i = 0; i < alarmList.length; i++) {
      console.log('AlarmId: ' + alarmList[i].inAppAlarmId);
      result.push(
        <NotiItem alarm={alarmList[i]} key={alarmList[i].inAppAlarmId} />,
      );
      readAlarmList.push(alarmList[i].inAppAlarmId);
    }
    readUpdate();
    return result;
  }

  function readUpdate() {
    console.log('알림 조회 업데이트!');
    updateAlarmRead(readAlarmList).then(data => {
      console.log(data);
    });
  }

  useEffect(() => {
    getAlarmList({userId: 72}).then(data => {
      setAlarmList(data);
    });
  }, []);

  const navigation = useNavigation();

  return (
    <>
      {/* Start Noti Header */}
      <GoBackHeader HeaderName="알림" />
      {/* END Noti Header */}
      <ScrollView style={Styles.Container} showsVerticalScrollIndicator={false}>
        {/* Start Noti Item */}
        {printAlarmList()}
        {/* <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem /> */}
      </ScrollView>
    </>
  );
};

export default NotiScreen;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    marginTop: 15,
  },
});
