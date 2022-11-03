import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MessageRoom from '../Components/MessageRoom';
const MessageScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
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
        <Text style={Styles.HeaderText}>메세지</Text>
      </View>
      {/* Header End */}
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}
        style={Styles.messagnerContainer}>
        <MessageRoom
          img={require('../assets/icons/33.png')}
          userName="옆집 눈나"
          messageTime="오후 8:10"
        />
        <MessageRoom
          img={require('../assets/icons/32.png')}
          userName="옆집 아줌마"
          messageTime="오후 7:10"
        />
        <MessageRoom
          img={require('../assets/icons/image22.png')}
          userName="옆집 형"
          messageTime="오후 6:10"
        />
        <MessageRoom
          img={require('../assets/icons/man1Avatar.png')}
          userName="옆집 형님"
          messageTime="오후 5:10"
        />
      </ScrollView>
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
    textAlign: 'center',
    color: '#282828',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: 15,
  },
  messagnerContainer: {
    marginTop: 25,
    overflow: 'visible',
  },
  messageRoom: {},
});
