import React, {useState, useEffect} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AllRanking from '../components/AllRanking';
import FriendRanking from '../components/FriendRanking';
const MessageScreen = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState('All')
  const onPressAll = () => {
    setSelect('All')
    console.log(select)
}
const onPressFriend = () => {
    setSelect('Friend')
    console.log(select)
}   
  return (
    <>
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
        <Text style={Styles.HeaderText}>랭킹</Text>
      </View>
      <View style={Styles.selectBox}>
          <TouchableOpacity onPress={onPressAll} style={select =='All' ? Styles.bottomBorder : Styles.selectTextHuman}>
              <View>
                  <Text style={{fontSize:15, color: '#282828',textAlign:'center',marginBottom:5,}}>
                      전체
                  </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressFriend} style={select =='Friend' ? Styles.bottomBorder : Styles.selectTextHuman}>
              <View>
                  <Text style={{fontSize:15, color: '#282828',textAlign:'center',marginBottom:5,}}>
                      친구
                  </Text>
              </View>
          </TouchableOpacity>
      </View>
      {select == 'All' ? 
      (
          <>
              <AllRanking />
          </>
      ) : 
      (
        <>
          <FriendRanking />
        </>
      )}     
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
    color: '#282828',
    fontSize: 22,
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: 15,
  },
  selectBox:{
    flexDirection:'row',
    // backgroundColor:'red',
    justifyContent:'space-around',
},
  selectTextHuman: {
      // borderBottomColor: 'gray',
      // borderBottomWidth: 2,
      width: '50%'
  },

  bottomBorder: {
      borderBottomColor: '#FF8544',
      borderBottomWidth: 1.5,
      width: '50%',
  },
});
