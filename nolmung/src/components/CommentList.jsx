import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  DeviceEventEmitter,
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {deleteComment, getAllCommentFromArticle} from '../api/Comment';
const CommentList = Props => {
  const userNickName = 'aJumoney__';
  const region = '서울특별시 강남구 역삼동';
  const windowWidth = Dimensions.get('window').width;
  const like = 200;
  const comment = 5;
  const [isModalVisible, setModalVisible] = useState(false);
  const [commentAll, setCommentAll] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const backdropOpacity = 0.3;

  console.log('asdf', Props.boardCommentId);
  const deleteCommentFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        deleteComment(
          {boardCommentId: Props.boardCommentId, userId: id},
          response => {
            console.log('댓글 삭제 성공', response);
          },
        );
      });
    } catch (err) {
      console.log('실패했습니다', err);
    }
  };

  return (
    <>
      {/* Comment Header start */}
      <View
        style={{
          paddingHorizontal: 30,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: Props.img}}
            resizeMode="cover"
            style={{width: 50, height: 50, borderRadius: 100}}
          />
          <View style={{marginLeft: 5}}>
            <Text style={{color: '#282828', fontWeight: '600', fontSize: 15}}>
              {Props.userNickName}
            </Text>
            <Text style={{color: '#959595'}}>
              {Props.region} {Props.addTime}
            </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <Image
            source={require('../assets/icons/menuvertical.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableWithoutFeedback>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          backdropOpacity={backdropOpacity}>
          <View style={Styles.threeModal}>
            <TouchableOpacity
              onPress={() => {
                console.log('이 댓글의 번호는?', Props.boardCommentId);
                deleteCommentFunc();
                DeviceEventEmitter.emit('commentDelete', {
                  key: Props.boardCommentId,
                });
              }}>
              <View style={Styles.ModalMenu}>
                <Text style={Styles.ModalMenuText}>삭제</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <View style={Styles.ModalMenu}>
                <Text style={Styles.ModalMenuText}>취소</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      {/* Comment Header End */}
      <View style={{paddingHorizontal: 30, marginLeft: 60}}>
        <Text style={{color: '#282828', textAlign: 'left'}}>
          {Props.content}
        </Text>
      </View>
    </>
  );
};

export default CommentList;

const Styles = StyleSheet.create({
  threeModal: {
    marginTop: 'auto',
    marginBottom: -20,
    marginHorizontal: -20,
    flex: 0.2,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
  },
  ModalMenuText: {
    color: '#282828',
  },
  ModalMenu: {
    paddingVertical: 5,
  },
  ModalMenuText: {
    color: '#282828',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
