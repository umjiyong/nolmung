import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NotiItem from '../components/NotiItem';
import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../components/GoBackHeader';
import {getAlarmList} from '../api/Alarm';

const NotiScreen = () => {
  const [alarmList, setAlarmList] = useState([]);

  function printAlarmList() {
    let result = [];
    for (let i = 0; i < alarmList.length; i++) {
      console.log('alarmList[' + i + ']: ' + JSON.stringify(alarmList[i]));
      result.push(<NotiItem alarm={alarmList[i]} />);
    }
    return result;
  }

  useEffect(() => {
    getAlarmList({userId: 1}).then(data => {
      setAlarmList(data);
      console.log('alarmList: ' + alarmList);
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
