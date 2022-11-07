import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import 'moment/locale/ko';

const MessageRoom = Props => {
  // const [lastMessage, setLastMessage] = useState({});
  const [content, setContent] = useState('');
  const [sendTime, setSendTime] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const ref = firestore()
    .collection('chatrooms')
    .doc(Props.chatroomId)
    .collection('messages');

  useEffect(() => {
    const unsubscribe = ref
      .orderBy('sendTime', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        const result = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        if(result.length===0){
          setContent('');
          setSendTime('');
        } else {
        setContent(result[0].content);
        setSendTime(result[0].sendTime);
        }
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const info = firestore()
      .collection('users')
      .doc(Props.userId + '')
      .onSnapshot(snapshot => {
        const result = snapshot.data();
        setUserInfo(result);
      });
    return () => {
      info();
    };
  }, []);

  const Navigation = useNavigation();
  return (
    <>
      <Pressable
        onPress={() =>
          Navigation.push('MessageRoomScreen', {
            // 나중에 userName, userId, img => userInfo: userInfo 로 수정 필요
            userName: userInfo.userName,
            userId: userInfo.userId,
            img: Props.img,
            chatroomId: Props.chatroomId,
          })
        }
        style={Styles.messageContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Props.img} // userInfo.userImg 로 수정 필요
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <View style={Styles.fontBlock}>
            <Text style={Styles.userNameText}>{userInfo.userName}</Text>
            <Text style={Styles.lastMessageText}>{content}</Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#959595'}}>
            {moment(new Date(sendTime.seconds * 1000))
              .utcOffset('+09:00')
              .format('LT')}
          </Text>
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
