import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableHighlight, Pressable, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native';
import FriendRecommand from '../components/FriendRecommand';
import FriendRequest from '../components/FriendRequest';
import Header from '../components/Header';
import MyFriend from '../components/MyFriend';
import Modal from "react-native-modal";
import SearchFriendList from '../components/SearchFriendList';
import {user_friend_list} from "../api/Friend"

function FriendScreen() {
  const [openFI, setOpenFI] = useState(false)
  const [friendList,setfriendList] = useState([])
  const onPressArrow = () => {
    setOpenFI(prev => !prev)
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible)
  };
  const backdropOpacity = 0.5

  const [search, setSearch] = useState(false)
  const searchFriend = () => {
    setSearch(!search)
    console.log(search)
  }
  const [text, setText] = useState('')



  const getfriend_list_func = async () => {
    try {
      
      await user_friend_list(
        { userId: 1 },
        (response) => {
          setfriendList(response.data);
        },
        (err) => {
          console.log("아티클질문 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };


  useEffect(() => {
    getfriend_list_func()
    
  }, []);

  console.log(friendList)

  return (
    <>
      <Header HeaderName="친구 목록" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}> 
        <View style={Styles.friendSignalToMe}> 
          <Text style={{color: '#282828', fontSize: 18, fontWeight: '500'}}>나에게 온 친구 신청</Text>
          <TouchableOpacity onPress={onPressArrow}>
            {openFI ? (
            <Image 
              source={require('../assets/icons/UpArrow.png')}
              resizeMode="contain"
              style={{
                
              }}
            />
            ) : 
            (
              <Image 
                source={require('../assets/icons/BottomArrow.png')}
                resizeMode="contain"
                style={{
                  
                }}/>
            )}
          </TouchableOpacity>
        </View>
        {openFI ? 
          (
            <>
              <ScrollView style={Styles.FriendRequestBox}>
                <FriendRequest />
                {/* <FriendRequest />
                <FriendRequest />
                <FriendRequest /> */}
              </ScrollView>
            </>
          )
          :
          (
            null
          )
        }
        <View style={Styles.friendRecommand}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={Styles.RecommandText}>친구 추천</Text>
            <TouchableOpacity>
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
            <FriendRecommand />
            <FriendRecommand />
            <FriendRecommand />
          </View>
        </View>
      
        <View style={Styles.MyFriend}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{color: '#282828', fontSize: 18, fontWeight:'500'}}>내 친구 보기</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={{color: '#282828', fontSize: 28, fontWeight: '600', marginRight: 10,}}>+</Text>
              </TouchableOpacity>
            </View>
           
            <ScrollView style={Styles.MyFriendBox}>
                  {(friendList.length>1) ? (
                  <>
                      {friendList.map((item,index)=>{
                        
                        return (<MyFriend
                        key = {index}
                        userId = {item.subUserId}
                        />)
                      })}
                  </>
                ): <Text>친구를 추가해주세요</Text>}
                
               
              
            </ScrollView>
        </View>
      </ScrollView>
      {/* 친구 코드 입력 모달 시작*/}
        <Modal 
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          backdropOpacity = {backdropOpacity}
        >
          <View style={Styles.modal}>
              <Text style={Styles.ModalText}>친구 코드 입력</Text>
              <View style={{flexDirection:'row', alignItems:'center',}}>
                <TextInput onChangeText={(e)=>setText(e)} value={text} style={Styles.ModalInput}/>
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
                        tintColor: '#FF772F'
                      }}/>
                  </View>  
                </TouchableWithoutFeedback>
              </View>
              {search ? <View><SearchFriendList /></View> : null }
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
    marginHorizontal:20,
  },
  friendSignalToMe: {
    marginTop: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  FriendRequestBox: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal:20,
    paddingTop:15,

  },
  friendRecommand: {
    marginTop: 20,
  },
  RecommandText: {
    color: "#282828",
    fontSize: 18,
    fontWeight: '500',
  },
  RecommandBox: {
    marginTop: 10,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical:15,
    paddingHorizontal: 20,
  },
  MyFriend: {
     marginTop: 10,
  },
  MyFriendBox:{
    marginTop: 10,
    backgroundColor:'#fff',
    borderRadius: 15,
    paddingTop:22,
    paddingLeft:20,
    marginBottom: 100,
  },

  modal : {
    flex:0.5,
    marginHorizontal: -20,
    height: '50%', 
    backgroundColor: '#fff', 
    marginTop:'auto',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    alignItems:'center',
    paddingTop: 15,
    marginBottom: -20,
  },
  ModalText: {
    color: '#282828',
    fontWeight:'600',
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
    textAlign:'center'

  }

});
