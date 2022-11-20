import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const MyWalkRecordInfo = Props => {
  const km = Props.Props.walkDistance;
  const hour = Props.Props.walkTime.hour;
  const min = Props.Props.walkTime.min;
  const sec = Props.Props.walkTime.sec;
  const perc = Props.Props.walkAttainment;
  const backdropOpacity = 0.1;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  const getWalkRecordDetailFunc = async walkId => {
    try {
      await getWalkRecordDetail(
        {
          walkId: walkId,
        },
        response => {
          console.log(response.data);
          setWalkRecordList(response.data);
        },
        err => {
          console.log('산책 상세 조회 에러', err);
        },
      );
    } catch (error) {
      console.log(err);
      console.log('산책 상세 조회 에러');
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={Styles.infoContainer}>
          <View style={Styles.infos}>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.infoText}>총 거리</Text>
              <Text style={Styles.infoTextColor}>{km}Km</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.infoText}>산책 시간</Text>
              {hour !== 0 ? (
                <>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginHorizontal: 50,
                      ...Styles.infoTextColor,
                    }}>
                    {hour}시간 {min}분 {sec}초
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginHorizontal: 50,
                      ...Styles.infoTextColor,
                    }}>
                    {min}분 {sec}초
                  </Text>
                </>
              )}
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.infoText}>목표 달성률</Text>
              <Text style={Styles.infoTextColor}>{perc}%</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={backdropOpacity}>
        <View style={Styles.ModalContainer}>
          {/* <View
            style={{
              flex: 1,
              width: '100%',
              height: 200,
              backgroundColor: '#959595',
              marginBottom: 30,
            }}></View> */}
          <Image
            source={{
              uri: 'https://www.ngii.go.kr/images/kor/business/img_internet_map.jpg',
            }}
            resizeMode="contain"
            style={{
              flex: 1,
              width: '100%',
              height: 200,
              backgroundColor: '#959595',
              marginBottom: 30,
            }}></Image>
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <View style={Styles.ModalInfoBox}>
              <Text style={Styles.ModalInfoBoxText}>총 거리</Text>
              <Text style={Styles.ModalInfoBoxTextColor}>{km}Km</Text>
            </View>
            <View style={Styles.ModalInfoBox}>
              <Text style={Styles.ModalInfoBoxText}>산책 시간</Text>
              {hour !== 0 ? (
                <>
                  <Text style={Styles.ModalInfoBoxTextColor}>{hour}시간</Text>
                  <Text style={Styles.ModalInfoBoxTextColor}>
                    {min}분 {sec}초
                  </Text>
                </>
              ) : (
                <>
                  <Text style={Styles.ModalInfoBoxTextColor}>
                    {min}분 {sec}초
                  </Text>
                </>
              )}
            </View>
            <View style={Styles.ModalInfoBox}>
              <Text style={Styles.ModalInfoBoxText}>목표 달성률</Text>
              <Text style={Styles.ModalInfoBoxTextColor}>{perc}%</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#f1f1f1',
                width: 150,
                height: 150,
              }}></View>
            <View
              style={{
                backgroundColor: '#f1f1f1',
                width: 150,
                height: 150,
              }}></View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MyWalkRecordInfo;

const Styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 2,
  },
  infoText: {
    color: '#282828',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 13,
  },
  infoTextColor: {
    color: '#FF772F',
    fontSize: 18,
    fontWeight: '700',
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  ModalContainer: {
    flex: 0.93,
    backgroundColor: '#fff',
    marginTop: 'auto',
    marginBottom: -20,
    marginHorizontal: -20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  ModalInfoBox: {
    width: 105,
    height: 100,
    backgroundColor: 'white',
    shadowColor: '#282828',
    elevation: 3,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInfoBoxText: {
    color: '#282828',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  ModalInfoBoxTextColor: {
    color: '#FF772F',
    fontSize: 12,
    fontWeight: '600',
  },
});
