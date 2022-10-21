import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from '../Components/Header';

function FriendScreen({navigation}) {
  return (
    <>
      <Header HeaderName="친구 목록" />
      <View style={Styles.container}>
        <Text>Friend</Text>
        <Button title="Click Here" onPress={() => alert('button Clicked!')} />
      </View>
    </>
  );
}

export default FriendScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});
