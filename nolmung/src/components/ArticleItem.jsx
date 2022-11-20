import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const ArticleItem = Props => {
  const Navigation = useNavigation();
  const userNickName = Props.userName;
  const region = Props.region;
  const windowWidth = Dimensions.get('window').width;
  const like = Props.likeCnt;
  const comment = 5;
  const img = Props.boardImg;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const backdropOpacity = 0.3;
  //   console.log(Props.boardId);
  console.log(Props);
  return (
    <>
      <View style={Styles.ArticleContainer}>
        {/* Header Start */}
        <View style={Styles.ArticleHeader}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: Props.userImg}} //프로필사진
              resizeMode="contain"
              style={{
                borderRadius: 100,
                width: 40,
                height: 40,
              }}
            />
            <View style={{marginLeft: 5}}>
              <Text style={Styles.Nickname}>{userNickName}</Text>
              <Text style={Styles.region}>{region}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <Image
              source={require('../assets/icons/Group.png')} //쩜3개
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableWithoutFeedback>

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            backdropOpacity={backdropOpacity}>
            <View style={Styles.threeModal}>
              <TouchableOpacity>
                <View style={Styles.ModalMenu}>
                  <Text style={Styles.ModalMenuText}>삭제</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={Styles.ModalMenu}>
                  <Text style={Styles.ModalMenuText}>취소</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>

        <ScrollView
          contentContainerStyle={Styles.ImageContainer}
          pagingEnabled={true}
          horizontal={true}>
          {img.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                resizeMode="cover"
                style={{
                  width: windowWidth,
                  height: 400,
                }}
              />
            );
          })}

          {/* <Image 
                            source={require('../assets/icons/Rectangle5962.png')}
                            resizeMode="cover"
                            style={{
                                width: windowWidth,
                                // height: 600,
                            }}
                        /> */}
        </ScrollView>
        {/* Image End */}
        <View style={Styles.likeAndComment}>
          <Image
            source={require('../assets/icons/message.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </View>
        <TouchableWithoutFeedback
          TouchableWithoutFeedback
          onPress={() => {
            Navigation.navigate('ArticleItemDetail', {boardId: Props.boardId});
          }}>
          <View style={Styles.Contents}>
            <Text
              style={{
                color: '#282828',
                fontSize: 16,
                lineHeight: 21,
                textAlign: 'left',
                marginBottom: 15,
              }}>
              {Props.boardContent}
            </Text>
            <Text style={{color: '#959595'}}>
              댓글 {Props.commentCnt}개 모두 보기
            </Text>
            <Text style={{color: '#959595', marginTop: 5}}>
              {Props.createDate}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default ArticleItem;

const Styles = StyleSheet.create({
  ArticleContainer: {
    marginVertical: 5,
    backgroundColor: '#fff',
    // paddingHorizontal: 30,
    paddingTop: 7,
    paddingBottom: 10,
  },
  ArticleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  Nickname: {
    color: '#282828',
    fontSize: 18,
    fontWeight: '600',
  },
  region: {
    color: '#959595',
    fontSize: 12,
  },
  ImageContainer: {
    marginTop: 7,
  },
  likeAndComment: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    marginTop: 7,
  },
  Contents: {
    marginTop: 5,
    paddingHorizontal: 30,
  },
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
