import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import GoBackHeader from '../Components/GoBackHeader';

const SettingScreen = () => {
  return (
    <>
      {/* Start Setting Header */}
      <GoBackHeader HeaderName="설정" />
      {/* END Setting Header */}
      <ScrollView style={Styles.Container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>알림 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>친구 차단 목록</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>문의하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>앱 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.SettingText}>회원탈퇴</Text>
        </TouchableOpacity>
      </ScrollView>
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
});
