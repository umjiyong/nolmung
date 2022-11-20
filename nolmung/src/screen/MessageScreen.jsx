import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../api/User';
import MessageRoom from '../components/MessageRoom';
import firestore from '@react-native-firebase/firestore';

const MessageScreen = () => {
  const [chatroomList, setChatroomList] = useState([]);
  const [userId, setUserId] = useState('1');
  const [messageRoomList, setMessageRoomList] = useState([]);
  // 하드코딩

  const ref = firestore()
    .collection('userChatrooms')
    .doc(userId + '')
    .collection('chatroomList');

  useEffect(() => {
    const unsubscribe = ref.onSnapshot(snapshot => {
      const result = snapshot.docs.map(doc => ({
        opponentId: doc.id,
        ...doc.data(),
      }));
      setChatroomList(result);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function printChatroomList() {
    let printResult = [];
    for (let chatroom of chatroomList) {
      getUserInfo(
        {id: chatroom.opponentId},
        res => async {
          chatroom.opponentName = res.data.userNickName;
          chatroom.img = 'require("' + res.data.userImg + '")';
          printResult.push(
            <MessageRoom
              img={chatroom.img}
              userId={chatroom.opponentId}
              userName={chatroom.opponentName}
              chatroomId={chatroom.chatroomId}
              key={chatroom.chatroomId}
            />,
          );
          console.log('message room list size11111: ' + printResult.length);
        },
        err => {
          console.log(err);
          chatroom.opponentName = '';
        },
      );
    }
    console.log('message room list size22222: ' + printResult.length);
    return printResult;
  }

  const navigation = useNavigation(chatroomList);
  return (
    <>
      {/* Header */}
      <View style={Styles.Header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../assets/icons/GoBack.png')}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <Text style={Styles.HeaderText}>메세지</Text>
      </View>
      {/* Header End */}
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}
        style={Styles.messagnerContainer}>
        {printChatroomList()}
      </ScrollView>
      <TouchableOpacity
        style={Styles.FriendListCheckBtn}
        onPress={() => {
          navigation.navigate('SearchFriendList');
        }}>
        <Image
          source={require('../assets/icons/message.png')}
          style={{
            tintColor: '#fff',
            width: 34,
            height: 34,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default MessageScreen;

const Styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  HeaderText: {
    textAlign: 'center',
    color: '#282828',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: 15,
  },
  messagnerContainer: {
    marginTop: 25,
  },
  messageRoom: {},
  FriendListCheckBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#FF772F',
    borderRadius: 50,
    position: 'absolute',
    bottom: 40,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#828282',
    elevation: 4,
  },
});
