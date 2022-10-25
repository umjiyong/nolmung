import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableHighlight, Pressable, ScrollView} from 'react-native';
import Header from '../Components/Header';

function FriendScreen({navigation}) {
  const [openFI, setOpenFI] = useState(true)
  const onPressArrow = () => {
    setOpenFI(prev => !prev)
  }
  return (
    <>
      <Header HeaderName="친구 목록" />
      <ScrollView style={Styles.container}>
        <View style={Styles.friendSignalToMe}> 
          <Text style={{color: '#282828', fontSize: 18,}}>나에게 온 친구 신청</Text>
          <Pressable onPress={onPressArrow}>
            {openFI ? (
            <Image 
              source={require('../assets/icons/BottomArrow.png')}
              resizeMode="contain"
              style={{
                
              }}
            />
            ) : 
            (
              <Image 
                source={require('../assets/icons/UpArrow.png')}
                resizeMode="contain"
                style={{
                  
                }}/>
            )}
          </Pressable>
          {openFI ? 
          (
          <>
            <View>

            </View>
          </>
          )
          :
          (<>
          </>)
          }
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
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});
