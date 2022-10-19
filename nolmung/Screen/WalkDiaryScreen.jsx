import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function WalkDiaryScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Text>WalkDiaryScreen</Text>
      <Button title="Click Here" onPress={() => alert('button Clicked!')} />
    </View>
  );
}

export default WalkDiaryScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});
