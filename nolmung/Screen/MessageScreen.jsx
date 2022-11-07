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
import MessageRoom from '../Components/MessageRoom';
import firestore from '@react-native-firebase/firestore';

const MessageScreen = () => {
  const [chatroomList, setChatroomList] = useState([]);
  const [userId, setUserId] = useState('1');
  // 하드코딩

  const ref = firestore()
    .collection('userChatrooms')
    .doc(userId + '');

  useEffect(() => {
    const unsubscribe = ref.onSnapshot(snapshot => {
      const result = snapshot.data().chatroomList;
      setChatroomList(result);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function printChatroomList() {
    let result = [];
    for (let i = 0; i < chatroomList.length; i++) {
      result.push(
        <MessageRoom
          img={require('../assets/icons/33.png')} // MessageRoom에서 불러오기
          userId={chatroomList[i].opponentId}
          chatroomId={chatroomList[i].chatroomId}
          key={chatroomList[i].chatroomId}
        />,
      );
    }
    return result;
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
        {/* <MessageRoom
          img={require('../assets/icons/33.png')}
          userName="옆집 눈나"
          messageTime="오후 8:10"
          userId={userId}
          chatroomId={chatroomList[0]}
        />
        <MessageRoom
          img={require('../assets/icons/32.png')}
          userName="옆집 아줌마"
          messageTime="오후 7:10"
        />
        <MessageRoom
          img={require('../assets/icons/image22.png')}
          userName="옆집 형"
          messageTime="오후 6:10"
        />
        <MessageRoom
          img={require('../assets/icons/man1Avatar.png')}
          userName="옆집 형님"
          messageTime="오후 5:10"
        /> */}
      </ScrollView>
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
    overflow: 'visible',
  },
  messageRoom: {},
});
