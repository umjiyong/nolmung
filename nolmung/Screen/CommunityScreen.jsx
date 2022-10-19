import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function CommunityScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Community</Text>

      <Button title="Click Here" onPress={() => alert('button Clicked!')} />
    </View>
  );
}

export default CommunityScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
});
