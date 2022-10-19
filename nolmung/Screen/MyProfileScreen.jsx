import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function MyProfileScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Text>MyProfile</Text>
      <Button title="Click Here" onPress={() => alert('button Clicked!')} />
    </View>
  );
}

export default MyProfileScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});
