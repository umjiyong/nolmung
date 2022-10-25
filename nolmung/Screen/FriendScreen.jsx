import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableHighlight, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import FriendRecommand from '../Components/FriendRecommand';
import FriendRequest from '../Components/FriendRequest';
import Header from '../Components/Header';
import MyFriend from '../Components/MyFriend';

function FriendScreen({navigation}) {
  const [openFI, setOpenFI] = useState(false)
  const onPressArrow = () => {
    setOpenFI(prev => !prev)
  }
  return (
    <>
      <Header HeaderName="친구 목록" />
      <ScrollView style={Styles.container}> 
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
              <TouchableOpacity>
                <Text style={{color: '#282828', fontSize: 28, fontWeight: '600', marginRight: 10,}}>+</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={Styles.MyFriendBox}>
              
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
                <MyFriend/>
              
            </ScrollView>
        </View>
      </ScrollView>
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
  }

});
