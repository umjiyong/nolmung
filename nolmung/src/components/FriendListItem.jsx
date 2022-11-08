import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const FriendListItem = Props => {
  const Navigation = useNavigation();
  const ref = firestore()
    .collection('userChatrooms')
    .doc('1')
    .collection('chatroomList')
    .doc(Props.userId);
  // 하드코딩

  return (
    <>
      <View style={Styles.ItemContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Props.img}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text
            style={{
              color: '#282828',
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
            }}>
            {Props.userName}
          </Text>
        </View>
        <TouchableOpacity
          style={Styles.StartChat}
          onPress={() => {
            if (
              ref.onSnapshot(snapshot => {
                if (!snapshot.exists) {
                  let newChatroomId;
                  firestore()
                    .collection('chatrooms')
                    .add()
                    .then(docRef => {
                      newChatroomId = docRef.id;
                      docRef.add('users');
                      docRef.add('messages');
                    });
                  ref.set({
                    chatroomId: newChatroomId,
                    opponentName: Props.userName,
                  });
                }
              })
            )
              Navigation.navigate('MessageRoomScreen', {
                img: Props.img,
                userId: '2',
                userName: Props.name,
              });
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              paddingVertical: 6,
              paddingHorizontal: 12,
            }}>
            대화하기
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FriendListItem;

const Styles = StyleSheet.create({
  ItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  StartChat: {
    backgroundColor: '#FF772F',
    borderRadius: 15,
  },
});
