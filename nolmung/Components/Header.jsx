import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Header = Props => {
  const navigation = useNavigation();
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerName}>{Props.HeaderName}</Text>
      <View style={Styles.headerIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('MessageScreen');
          }}>
          <Image
            source={require('../assets/icons/message.png')}
            resizeMode="contain"
            style={{
              width: 23,
              height: 23,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('NotiScreen');
          }}>
          <Image
            source={require('../assets/icons/noti.png')}
            resizeMode="contain"
            style={{
              width: 23,
              height: 23,
              marginLeft: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('RankingScreen');
          }}>
          <Image
            source={require('../assets/icons/crown.png')}
            resizeMode="contain"
            style={{
              width: 23,
              height: 23,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#000',
  },
  headerName: {
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
  },
  headerIcon: {
    flexDirection: 'row',
  },
});
