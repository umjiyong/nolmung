import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const Time = year + '.' + month + '.' + date + ' ' + hours + ':' + minutes;

const NotiName = '내가 올린 게시글에 댓글이 달렸어요.';

const NotiItem = () => {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity>
        <Text style={Styles.NotiName}>{NotiName}</Text>
        <Text style={Styles.NotiTime}>{Time}</Text>
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
