import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NotiItem from '../components/NotiItem';
import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../components/GoBackHeader';
const NotiScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Start Noti Header */}
      <GoBackHeader HeaderName="알림" />
      {/* END Noti Header */}
      <ScrollView style={Styles.Container} showsVerticalScrollIndicator={false}>
        {/* Start Noti Item */}
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
      </ScrollView>
    </>
  );
};

export default NotiScreen;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    marginTop: 15,
  },
});
