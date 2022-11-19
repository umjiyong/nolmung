import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import FriendRecommand from '../components/FriendRecommand';
import FriendRequest from '../components/FriendRequest';
import Header from '../components/Header';
import MyFriend from '../components/MyFriend';
import Modal from 'react-native-modal';
import SearchFriendList from '../components/SearchFriendList';

import {
  user_friend_list,
  user_friend_proposal,
  user_friend_random,
  user_friend_search,
  user_friend_post,
} from '../api/Friend';
import {useNavigation} from '@react-navigation/native';

function FriendScreen() {
  const navigation = useNavigation();
  const [openFI, setOpenFI] = useState(false);
  const [friendList, setfriendList] = useState([]);
  const onPressArrow = () => {
    setOpenFI(prev => !prev);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const backdropOpacity = 0.5;

  const [search, setSearch] = useState(false);

  const [text, setText] = useState('');
  const [friendrequest, setfriendrequest] = useState('');
  const [friendrandom, setfriendrandom] = useState([]);
  const [friendId, setfriendId] = useState('');

  const user_friend_post_func = async () => {
    try {
      await user_friend_post(
        {fromUserId: 1, toUserId: 2},
        response => {
          console.log('보내기 성공');
        },
        err => {
          console.log('아티클질문 에러', err);
          setfriendId(null);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_friend_search_func = async ftext => {
    try {
      await user_friend_search(
        {userCode: ftext},
        response => {
          setfriendId(response.data);
        },
        err => {
          console.log('아티클질문 에러', err);
          setfriendId(null);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const searchFriend = () => {
    setSearch(!search);

    user_friend_search_func(text);
  };

  const getfriend_list_func = async () => {
    try {
      await user_friend_list(
        {userId: 1},
        response => {
          setfriendList(response.data);
        },
        err => {
          console.log('아티클질문 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_friend_proposal_func = async () => {
    try {
      await user_friend_proposal(
        {userId: 1},
        response => {
          setfriendrequest(response.data);
        },
        err => {
          console.log('아티클질문 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_friend_random_func = async () => {
    try {
      await user_friend_random(
        {userId: 1},
        response => {
          console.log('refresh', response.data);
          setfriendrandom(response.data);
        },
        err => {
          console.log('아티클질문 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const refresh_func = () => {
    console.log('리프레시');
    user_friend_random_func();
  };

  useEffect(() => {
    getfriend_list_func();
    user_friend_proposal_func();
    user_friend_random_func();
  }, []);

  // console.log("로그확인",friendrequest)

  return (
    <>
      <Header HeaderName="친구 목록" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <View style={Styles.friendSignalToMe}>
          <Text style={{color: '#282828', fontSize: 18, fontWeight: '500'}}>
            나에게 온 친구 신청
          </Text>
          <TouchableOpacity onPress={onPressArrow}>
            {openFI ? (
              <Image
                source={require('../assets/icons/UpArrow.png')}
                resizeMode="contain"
                style={{}}
              />
            ) : (
              <Image
                source={require('../assets/icons/BottomArrow.png')}
                resizeMode="contain"
                style={{}}
              />
            )}
          </TouchableOpacity>
        </View>

        {openFI ? (
          <>
            <ScrollView style={Styles.FriendRequestBox}>
              {friendrequest.length > 0 ? (
                <>
                  {friendrequest.map((item, index) => {
                    return (
                      <FriendRequest key={index} userId={item.subUserId} />
                    );
                  })}
                </>
              ) : (
                <Text style={{color: '#282828'}}>친구 요청이 없습니다</Text>
              )}
            </ScrollView>
          </>
        ) : null}

        <View style={Styles.friendRecommand}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={Styles.RecommandText}>친구 추천</Text>

            <TouchableOpacity onPress={refresh_func}>
              <Image
                source={require('../assets/icons/revision-regular-24.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.RecommandBox}>
            {friendrandom.length > 0 ? (
              <>
                {friendrandom.map(item => {
                  return (
                    <FriendRecommand key={item.userId} userId={item.userId} />
                  );
                })}
              </>
            ) : (
              <Text style={{color: '#282828'}}>친구 추천이 없습니다</Text>
            )}
          </View>
        </View>

        <View style={Styles.MyFriend}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#282828', fontSize: 18, fontWeight: '500'}}>
              내 친구 보기
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 28,
                  fontWeight: '600',
                  marginRight: 10,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={Styles.MyFriendBox}>
            {friendList.length > 0 ? (
              <>
                {friendList.map((item, index) => {
                  return <MyFriend key={index} userId={item.subUserId} />;
                })}
              </>
            ) : (
              <Text>친구를 추가해주세요</Text>
            )}
          </ScrollView>
        </View>
      </ScrollView>
      {/* 친구 코드 입력 모달 시작*/}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={backdropOpacity}>
        <View style={Styles.modal}>
          <Text style={Styles.ModalText}>친구 코드 입력</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              onChangeText={e => setText(e)}
              value={text}
              style={Styles.ModalInput}
            />
            <TouchableWithoutFeedback onPress={searchFriend}>
              <View>
                <Image
                  source={require('../assets/icons/search.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 13,
                    marginLeft: 10,
                    tintColor: '#FF772F',
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          {friendId ? (
            <Pressable
              onPress={() => {
                navigation.push('FriendProfile', {userId: friendId.userId});
                toggleModal();
              }}>
              <SearchFriendList userId={friendId} />
            </Pressable>
          ) : (
            <Text>친구코드를 확인해주세요</Text>
          )}
        </View>
      </Modal>
      {/* 친구 코드 입력 모달 끝 */}
    </>
  );
}

export default FriendScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  friendSignalToMe: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FriendRequestBox: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  friendRecommand: {
    marginTop: 20,
  },
  RecommandText: {
    color: '#282828',
    fontSize: 18,
    fontWeight: '500',
  },
  RecommandBox: {
    marginTop: 10,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  MyFriend: {
    marginTop: 10,
  },
  MyFriendBox: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 22,
    paddingLeft: 20,
    marginBottom: 100,
  },

  modal: {
    flex: 0.5,
    marginHorizontal: -20,
    height: '50%',
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: -20,
  },
  ModalText: {
    color: '#282828',
    fontWeight: '600',
    fontSize: 18,
  },
  ModalInput: {
    borderWidth: 0.5,
    borderColor: '#525252',
    width: '80%',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    color: '#282828',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
