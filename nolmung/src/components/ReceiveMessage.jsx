import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/ko';

const options = {
  dateStyle: 'medium',
  timeStyle: 'short',
};

const ReceiveMessage = Props => {
  // const Time = "오후 10:40"
  // const Message = "산책가자..."
  console.log(Props.userName);

  return (
    <>
      <View style={Styles.ReceiveMessageContainer}>
        <Image
          source={Props.img}
          resizeMode="contain"
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
          }}
        />
        <View style={{marginLeft: 5}}>
          <Text style={{color: '#282828', marginBottom: 5}}>
            {Props.userName}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={Styles.Message}>{Props.message.content}</Text>
            <Text style={Styles.messageTime}>
              {moment(new Date(Props.message.sendTime.seconds * 1000))
                .utcOffset('+09:00')
                .format('LT')}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ReceiveMessage;

const Styles = StyleSheet.create({
  receiveMessage: {
    color: '#282828',
  },
  ReceiveMessageContainer: {
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  Message: {
    color: '#282828',
    fontSize: 16,
    backgroundColor: '#FFB9B9',
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 6,
  },
  messageTime: {
    color: '#959595',
    fontSize: 12,
    marginLeft: 4,
  },
});
