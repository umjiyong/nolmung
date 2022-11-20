import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import ArticleItem from '../components/ArticleItem';
import {useNavigation} from '@react-navigation/native';
import {
  getArticles_all,
  getArticles_friend,
  getArticles_qna,
  getArticles_region,
} from '../api/Article.js';
function CommunityScreen() {
  const Navigation = useNavigation();
  const [HeaderName, setHeaderName] = useState('모든 동네');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const backdropOpacity = 0.3;

  const [articleAll, setArticleAll] = useState([]);
  const [articleFriend, setArticleFriend] = useState([]);
  const [articleQna, setArticleQna] = useState([]);
  const [articleRegion, setArticleRegion] = useState([]);
  const getArticle_all_func = async () => {
    try {
      await getArticles_all(response => {
        setArticleAll(response.data);
      });
    } catch (err) {
      console.log(err);
      console.log('심각한 에러');
    }
  };

  const getArticle_friend_func = async () => {
    try {
      await getArticles_friend({userId: 1}, response => {
        setArticleFriend(response.data);
      });
    } catch (err) {
      console.log(err);
      console.log('심각한 에러');
    }
  };

  const getArticle_qna_func = async () => {
    try {
      await getArticles_qna({index: 1}, response => {
        setArticleQna(response.data);
      });
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };
  const getArticle_region_func = async () => {
    try {
      await getArticles_region({userId: 1}, response => {
        setArticleRegion(response.data);
      });
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  useEffect(() => {
    getArticle_all_func();
    getArticle_friend_func();
    getArticle_qna_func();
    getArticle_region_func();
  }, []);
  console.log('articleAll', articleAll);
  return (
    <>
      <View style={Styles.container}>
        {/* Header Start */}
        <View style={Styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Styles.headerName}>{HeaderName}</Text>
            <TouchableWithoutFeedback onPress={toggleModal}>
              <Image
                source={require('../assets/icons/BottomArrow.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 5,
                }}
              />
            </TouchableWithoutFeedback>

            <Modal
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
              backdropOpacity={backdropOpacity}>
              <View style={Styles.ModalContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setHeaderName('모든 동네');
                    toggleModal();
                  }}>
                  <View style={Styles.ModalMenu}>
                    <Text style={Styles.ModalMenuText}>모든 동네</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHeaderName('우리 동네');
                    toggleModal();
                  }}>
                  <View style={Styles.ModalMenu}>
                    <Text style={Styles.ModalMenuText}>우리 동네</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHeaderName('내 친구 글');
                    toggleModal();
                  }}>
                  <View style={Styles.ModalMenu}>
                    <Text style={Styles.ModalMenuText}>내 친구 글</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHeaderName('질문 있어요');
                    toggleModal();
                  }}>
                  <View style={Styles.ModalMenu}>
                    <Text style={Styles.ModalMenuText}>질문 있어요</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <View style={Styles.headerIcon}>
            <TouchableOpacity
              onPress={() => {
                Navigation.push('MessageScreen');
              }}>
              <Image
                source={require('../assets/icons/message.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Navigation.push('NotiScreen');
              }}>
              <Image
                source={require('../assets/icons/noti.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  marginLeft: 15,
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Navigation.push('RankingScreen');
              }}>
              <Image
                source={require('../assets/icons/crown.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {HeaderName === '모든 동네' && articleAll ? (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.ScrollView}>
              {articleAll.map((item, index) => {
                return (
                  <ArticleItem
                    key={index}
                    createDate={item.boardUpdateDate}
                    boardId={item.boardId}
                    userId={item.userId}
                    userName={item.userName}
                    region={item.region}
                    boardContent={item.boardContent}
                    boardUpdateDate={item.boardUpdateDate}
                    boardImg={item.boardImg}
                    likeCnt={item.likeCnt}
                    userImg={item.userImg}
                  />
                );
              })}
            </ScrollView>
          </>
        ) : null}

        {HeaderName === '우리 동네' && articleRegion ? (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.ScrollView}>
              {articleRegion.map((item, index) => {
                return (
                  <ArticleItem
                    key={index}
                    boardId={item.boardId}
                    userId={item.userId}
                    userName={item.userName}
                    region={item.region}
                    boardContent={item.boardContent}
                    boardUpdateDate={item.boardUpdateDate}
                    boardImg={item.boardImg}
                    likeCnt={item.likeCnt}
                    userImg={item.userImg}
                  />
                );
              })}
            </ScrollView>
          </>
        ) : null}

        {HeaderName === '내 친구 글' && articleFriend ? (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.ScrollView}>
              {articleFriend.map((item, index) => {
                return (
                  <ArticleItem
                    key={index}
                    boardId={item.boardId}
                    userId={item.userId}
                    userName={item.userName}
                    region={item.region}
                    boardContent={item.boardContent}
                    boardUpdateDate={item.boardUpdateDate}
                    boardImg={item.boardImg}
                    likeCnt={item.likeCnt}
                    userImg={item.userImg}
                  />
                );
              })}
            </ScrollView>
          </>
        ) : null}

        {HeaderName === '질문 있어요' && articleQna ? (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.ScrollView}>
              {articleQna.map((item, index) => {
                return (
                  <ArticleItem
                    key={index}
                    boardId={item.boardId}
                    userId={item.userId}
                    userName={item.userName}
                    region={item.region}
                    boardContent={item.boardContent}
                    boardUpdateDate={item.boardUpdateDate}
                    boardImg={item.boardImg}
                    likeCnt={item.likeCnt}
                    userImg={item.userImg}
                  />
                );
              })}
            </ScrollView>
          </>
        ) : null}
      </View>
      <TouchableOpacity
        style={Styles.PlusArticleBtn}
        onPress={() => Navigation.navigate('NewArticle')}>
        <Text style={Styles.TextShadow}>+</Text>
      </TouchableOpacity>
    </>
  );
}

export default CommunityScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#000',
  },
  headerName: {
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
  },
  headerIcon: {
    flexDirection: 'row',
  },
  ModalContainer: {
    marginTop: 'auto',
    marginBottom: -20,
    marginHorizontal: -20,
    flex: 0.3,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
  },
  ModalMenuText: {
    color: '#282828',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  ModalMenu: {
    paddingVertical: 5,
  },
  ScrollView: {
    paddingTop: 10,
    paddingBottom: 200,
  },
  PlusArticleBtn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF772F',
    position: 'absolute',
    bottom: 100,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#282828',
    elevation: 3,
    borderColor: '#fff',
    borderWidth: 1,
  },
  TextShadow: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '600',
  },
});
