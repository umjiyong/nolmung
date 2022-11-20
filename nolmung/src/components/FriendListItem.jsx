import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const FriendListItem = Props => {
  const Navigation = useNavigation();

  let chatroomId = '';

  const ref = firestore()
    .collection('userChatrooms')
    .doc('1')
    .collection('chatroomList')
    .doc(Props.userId);
  // 하드코딩

  function addNewChatroom(userId, friendId, chatroomId) {
    firestore().collection('userChatrooms').doc(userId).set({});
    const docRef = firestore().collection('userChatrooms').doc(userId);

    docRef.collection('chatroomList').doc(friendId).set({
      chatroomId: chatroomId,
    });
  }

  async function createChatroom(userId, friendId) {
    console.log('create Chatroom with ' + userId + ' and ' + friendId);
    firestore()
      .collection('chatrooms')
      .add({})
      .then(docRef => {
        chatroomId = docRef.id;
        docRef.collection('users').doc(userId).set({});
        docRef.collection('users').doc(friendId).set({});
        addNewChatroom(userId, friendId, chatroomId);
        addNewChatroom(friendId, userId, chatroomId);
        console.log('newChatroomId: ' + chatroomId);
      });
  }

  async function findChatroom(userId, friendId) {
    console.log('find Chatroom with ' + userId + ' and ' + friendId);
    const unsubscribe = firestore()
      .collection('userChatrooms')
      .doc(userId)
      .collection('chatroomList')
      .doc(friendId)
      .onSnapshot(snapshot => {
        chatroomId = snapshot.data().chatroomId;
        console.log('founded chatroom: ' + chatroomId);
      });
    return () => unsubscribe();
  }

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
            ref.onSnapshot(snapshot => {
              if (!snapshot.exists) {
                firestore()
                  .collection('chatrooms')
                  .add({})
                  .then(docRef => {
                    chatroomId = docRef.id;
                    docRef.collection('users').doc('1').set({});
                    docRef.collection('users').doc(Props.userId).set({});
                    addNewChatroom('1', Props.userId, chatroomId);
                    addNewChatroom(Props.userId, '1', chatroomId);
                    console.log('newChatroomId: ' + chatroomId);
                  });
              } else {
                firestore()
                  .collection('userChatrooms')
                  .doc('1')
                  .collection('chatroomList')
                  .doc(Props.userId)
                  .onSnapshot(snapshot => {
                    chatroomId = snapshot.data().chatroomId;
                    console.log('founded chatroom: ' + chatroomId);
                  });
              }

              console.log("friendListItem's chatroomId: " + chatroomId);
              Navigation.navigate('MessageRoomScreen', {
                img: Props.img,
                userId: '2',
                userName: Props.userName,
                chatroomId: chatroomId,
              });
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
