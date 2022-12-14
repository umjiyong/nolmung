import React from 'react';
import {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../api/User';
import {getUserPuppyInfo} from '../api/Puppy';
import {userAcceptProposal, userDenyProposal} from '../api/Friend';
const FriendRequest = Props => {
  const navigation = useNavigation();

  const [userinfo, setuseinfo] = useState([]);
  const [puppyinfo, setpuppyinfo] = useState([]);
  const HumanName = userinfo.userNickName;
  const [DogInfo, setDogInfo] = useState('강아지가 없습니다');

  const user_info_func = async Id => {
    try {
      await getUserInfo(
        {id: Id},
        response => {
          setuseinfo(response.data);
        },
        err => {
          console.log('유저정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_puppy_info_func = async Id => {
    try {
      await getUserPuppyInfo(
        {Id: Id}, //Id 로 바꿔줘야함
        response => {
          console.log('아이디임', Id);
          setpuppyinfo(response.data);
        },
        err => {
          console.log('강아지정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const userAcceptProposal_func = async Id => {
    try {
      await userAcceptProposal(
        {friendProposalId: Id}, //Id 로 바꿔줘야함
        response => {
          console.log('수락 성공', Id);
        },
        err => {
          console.log('수락 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const userDenyProposal_func = async Id => {
    try {
      await userDenyProposal(
        {friendProposalId: Id}, //Id 로 바꿔줘야함
        response => {
          console.log('수락 성공', Id);
        },
        err => {
          console.log('수락 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const proposalBtn = () => {
    userAcceptProposal_func(Props.proposalId);
  };

  const proposalDenyBtn = () => {
    userDenyProposal_func(Props.proposalId);
  };

  useEffect(() => {
    user_info_func(Props.userId);
    user_puppy_info_func(Props.userId);
  }, []);
  useEffect(() => {
    if (puppyinfo.length > 0) {
      console.log('확인중', puppyinfo);
      setDogInfo(
        puppyinfo.myPuppyList[0].puppyInfo.puppyName
          .concat(' ', puppyinfo.myPuppyList[0].puppyInfo.puppyAge)
          .concat('', '살')
          .concat(' ', puppyinfo.myPuppyList[0].puppyInfo.breedName),
      );
    } else {
      setDogInfo('강아지가 없습니다');
    }
  }, [puppyinfo]);

  // console.log('보낸사람 정보', userinfo);

  // console.log('퍼퍼콘솔', puppyinfo);

  return (
    <>
      <View style={Styles.requestContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push('FriendProfile', {userId: Props.userId});
          }}>
          <View style={Styles.requestContainer}>
            <Image
              source={{uri: userinfo.userImg}}
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
                borderRadius: 100,
              }}
            />
            <View style={Styles.requestTextBox}>
              <Text
                style={{...Styles.requestText, fontSize: 20, marginTop: -15}}>
                {HumanName}
              </Text>
              <Text style={{...Styles.requestText, fontSize: 16, marginTop: 3}}>
                {DogInfo}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={Styles.requestBtnContainer}>
        <TouchableOpacity onPress={proposalBtn}>
          <View style={Styles.agreeBtn}>
            <Text style={Styles.agreeText}>수락</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={proposalDenyBtn}>
          <View style={Styles.disagreeBtn}>
            <Text style={Styles.disagreeText}>삭제</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FriendRequest;

const Styles = StyleSheet.create({
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestTextBox: {
    marginLeft: 10,
  },
  requestText: {
    color: '#282828',
  },
  requestBtnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  agreeBtn: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#FF772F',
    borderRadius: 13,
  },
  disagreeBtn: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF772F',
    borderRadius: 13,
  },
  agreeText: {
    color: '#fff',
  },
  disagreeText: {
    color: '#FF772F',
  },
});
