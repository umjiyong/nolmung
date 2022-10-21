import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const MessageScreen = () => {
  const navigation = useNavigation();
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
});
