import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MessageRoom = Props => {
  const lastMessage = '강아지 데리고 산책 갑시다!';
  const Navigation = useNavigation();
  return (
    <>
      <Pressable
        onPress={() =>
          Navigation.push('MessageRoomScreen', {
            userName: Props.userName,
            img: Props.img,
            chatroomId: Props.chatroomId,
          })
        }
        style={Styles.messageContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Props.img}
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <View style={Styles.fontBlock}>
            <Text style={Styles.userNameText}>{Props.userName}</Text>
            <Text style={Styles.lastMessageText}>{lastMessage}</Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#959595'}}>{Props.messageTime}</Text>
        </View>
      </Pressable>
    </>
  );
};

export default MessageRoom;

const Styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 3.5,
    borderRadius: 15,
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 17,
    justifyContent: 'space-between',
  },
  fontBlock: {
    marginLeft: 10,
  },
  userNameText: {
    color: '#282828',
    fontSize: 20,
    letterSpacing: -1,
  },
  lastMessageText: {
    marginTop: 5,
    color: '#959595',
    letterSpacing: -0.5,
  },
});
