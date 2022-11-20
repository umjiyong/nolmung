import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import GoBackHeader from '../components/GoBackHeader';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingScreen = () => {
  const navigation = useNavigation();
  const backdropOpacity = 0.3;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  const deleteAsync = () => {
    console.log('삭제했당');
    AsyncStorage.clear();
    navigation.navigate('Login');
  };
  return (
    <>
      {/* Start Setting Header */}
      <GoBackHeader HeaderName="설정" />
      {/* END Setting Header */}
      <ScrollView style={Styles.Container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>알림 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('CutOffList');
          }}>
          <Text style={Styles.SettingText}>친구 차단 목록</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>문의하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>앱 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          {/* onPress={deleteAsync} */}
          <Text style={Styles.SettingText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>회원탈퇴</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={backdropOpacity}>
        <View style={Styles.ModalContainer}>
          <Text
            style={{
              color: '#282828',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            로그아웃 하시겠습니까?
          </Text>
          <View style={Styles.btn}>
            <Pressable
              onPress={() => {
                deleteAsync();
                toggleModal();
              }}
              style={{
                backgroundColor: '#FF772F',
                paddingVertical: 4,
                paddingHorizontal: 30,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>
                예
              </Text>
            </Pressable>
            <Pressable
              onPress={toggleModal}
              style={{
                borderColor: '#FF772F',
                borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 30,
                borderRadius: 10,
              }}>
              <Text>아니요</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingScreen;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 35,
    marginTop: 15,
  },
  SettingText: {
    color: '#282828',
    fontSize: 22,
    fontFamily: 'NotoSansKR-Medium',
    letterSpacing: -1,
  },
  ModalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,

    padding: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
