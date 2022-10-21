import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GoBackHeader = Props => {
  const navigation = useNavigation();

  return (
    <View style={Styles.Container}>
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
      <View style={Styles.NotiHeader}>
        <Text style={Styles.NotiTitle}>{Props.HeaderName}</Text>
      </View>
    </View>
  );
};

export default GoBackHeader;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  NotiHeader: {
    marginTop: 0,
    marginBottom: 5,
  },
  NotiTitle: {
    marginTop: -5,
    marginBottom: -5,
    color: '#282828',
    fontSize: 28,
    fontFamily: 'NotoSansKR-Bold',
  },
});
