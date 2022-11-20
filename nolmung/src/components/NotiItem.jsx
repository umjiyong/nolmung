import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const Time = year + '.' + month + '.' + date + ' ' + hours + ':' + minutes;

const NotiName = '내가 올린 게시글에 댓글이 달렸어요.';

const NotiItem = Props => {
  const navigation = useNavigation();
  return (
    <View style={Styles.Container}>
      <TouchableOpacity
        onPress={() => {
          console.log('Alarm: ' + JSON.stringify(Props.alarm));
          console.log('inAppAlarmLink:' + Props.alarm.inAppAlarmLink);
          isNaN(Props.alarm.inAppAlarmLink)
            ? navigation.navigate(Props.alarm.inAppAlarmLink)
            : navigation.navigate('ArticleItemDetail', {
                boardId: Props.alarm.inAppAlarmLink,
              });
        }}>
        <Text
          style={
            Props.alarm.inAppAlarmIsCheck
              ? Styles.ReadNotiName
              : Styles.NotiName
          }>
          {Props.alarm.inAppAlarmContent}
        </Text>
        <Text style={Styles.NotiTime}>{Props.alarm.inAppAlarmUpdateDate}</Text>
      </TouchableOpacity>
      <View style={Styles.NotiHr}></View>
    </View>
  );
};

export default NotiItem;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 15,
  },
  NotiName: {
    marginTop: -15,
    fontSize: 17,
    fontFamily: 'NotoSansKR-Bold',
    color: '#282828',
    letterSpacing: -1,
  },
  ReadNotiName: {
    marginTop: -15,
    fontSize: 17,
    fontFamily: 'NotoSansKR-Bold',
    color: '#959595',
    letterSpacing: -1,
  },
  NotiTime: {
    marginTop: -10,
    color: '#959595',
    fontSize: 12,
  },
  NotiHr: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
    marginTop: 20,
    marginBottom: 25,
  },
});
