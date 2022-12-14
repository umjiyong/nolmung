import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import Modal from 'react-native-modal';
import { registUserInfo } from '../api/User';

const NewUserInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState();
  const [introduce, setIntroduce] = useState('');
  const [nickName, setNickName] = useState('닉네임을 입력하세요');
  const [sendAddress, setSendAddress] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const backdropOpacity = 0.3;
  const Navigation = useNavigation();
  
  const onChangeText = event => {
    setNickName(event);
  };
  
  const onChangeIntro = event => {
    setIntroduce(event);
  };

  const pushUserData = () => {
    try {
      registUserInfo(
        {
          userAddressText: sendAddress,
          userIntroduction: introduce,
          userNickName: nickName,
        },
        res => {
          console.log('유저정보 등록 성공');
        },
        err => {
          console.log('유저정보 등록 실패');
        },
      );
    } catch (err) {
      console.log('잘못된 요청');
    }
    Navigation.push('NewUserPetInfo');
  };

  return (
    <>
      <View style={{flex: 1}}>
        {/* NewUserInfo Screen Header Start */}
        <View
          style={{
            flex: 0.08,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: '#282828', fontWeight: '600', fontSize: 18}}>
            내 정보 등록
          </Text>
        </View>
        {/* NewUserInfo Screen Header End */}
        <View style={Styles.HumanContainer}>
          <View style={Styles.HumanNickNameBox}>
            <Text style={Styles.HumanNickname}>닉네임</Text>
            <TextInput
              onFocus={() => {
                setNickName('');
              }}
              value={nickName}
              onChangeText={onChangeText}
              style={Styles.horizentalLine}
            />
          </View>
          <View style={Styles.HumanIntroBox}>
            <Text style={Styles.IntroTitle}>자기소개</Text>
            <TextInput
              value={introduce}
              onChangeText={onChangeIntro}
              style={Styles.TextArea}
              multiline={true}
            />
          </View>
          <View style={Styles.HumanAddressBox}>
            <Text style={Styles.AddressText}>주소</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#282828'}}>{address}</Text>
              <Pressable onPress={toggleModal}>
                <Text style={Styles.changeBtn}>변경</Text>
              </Pressable>
            </View>
            <View style={Styles.addressBottom} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={Styles.completeBtn} onPress={pushUserData}>
            <Text style={{color: '#fff', fontWeight: '500'}}>다음</Text>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          backdropOpacity={backdropOpacity}>
          <Postcode
            style={{flex: 1}}
            jsOptions={{
              animation: true,
              hideMapBtn: true,
              autoMapping: false,
              showMoreHName: true,
            }}
            onSelected={data => {
              console.log(JSON.stringify(data));
              setAddress(data.roadAddress.replace(/\"/gi, ''));
              if (data.hname !== "") setSendAddress(data.hname)
              else setSendAddress(data.bname)
              toggleModal();
            }}
          />
        </Modal>
      </View>
    </>
  );
};

export default NewUserInfo;

const Styles = StyleSheet.create({
  HumanContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  HumanNickname: {
    color: '#282828',
    fontWeight: '600',
    fontSize: 16,
  },
  horizentalLine: {
    color: '#282828',
    borderBottomColor: '#959595',
    borderBottomWidth: 1,
    marginBottom: 20,
    height: 40,
  },
  HumanNickNameBox: {},
  HumanIntroBox: {
    // backgroundColor: 'red'
  },
  IntroTitle: {
    color: '#282828',
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 16,
  },
  TextArea: {
    color: '#282828',
    borderWidth: 1,
    borderColor: '#959595',
    borderRadius: 15,
    paddingLeft: 15,
  },
  HumanAddressBox: {
    marginTop: 20,
  },
  AddressText: {
    fontWeight: '600',
    color: '#282828',
    fontSize: 16,
  },
  addressBottom: {
    marginTop: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  changeBtn: {
    color: '#FF772F',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF772F',
    borderRadius: 15,
    paddingTop: 2,
    paddingHorizontal: 10,
  },
  completeBtn: {
    marginTop: 100,
    width: '30%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF772F',
    borderRadius: 50,
  },
});
