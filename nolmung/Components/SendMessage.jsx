import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';

const options = {
  dateStyle: 'medium',
  timeStyle: 'short',
};

const SendMessage = Props => {
  // const Time = "오후 10:40"
  // const Message = "아니요..."
  console.log(Props.userName);
  return (
    <>
      <View style={Styles.sendMessageContainer}>
        <Text style={Styles.messageTime}>
          {moment(new Date(Props.message.sendTime.seconds * 1000))
            .utcOffset('+09:00')
            .format('LT')}
        </Text>
        <Text style={Styles.Message}>{Props.message.content}</Text>
      </View>
    </>
  );
};

export default SendMessage;

const Styles = StyleSheet.create({
  sendMessageContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageTime: {
    color: '#959595',
    fontSize: 12,
    marginRight: 4,
  },
  Message: {
    color: '#282828',
    fontSize: 16,
    backgroundColor: '#FFC19F',
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
