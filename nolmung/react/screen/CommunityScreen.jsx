import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Modal from "react-native-modal"
import ArticleItem from '../components/ArticleItem';

function CommunityScreen({navigation}) {
  const [HeaderName, setHeaderName] =  useState("모든 동네")
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
        setModalVisible(!isModalVisible);
        console.log(isModalVisible)
    };
  const backdropOpacity = 0.3
  
  
  
  return (
    <>
      <View style={Styles.container}>
        {/* Header Start */}
          <View style={Styles.header}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
              <Text style={Styles.headerName}>{HeaderName}</Text>
              <TouchableWithoutFeedback onPress={toggleModal}>
                <Image 
                  source={require('../assets/icons/BottomArrow.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 5
                  }}
                />
              </TouchableWithoutFeedback>



              <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                backdropOpacity = {backdropOpacity}
              >
                <View style={Styles.ModalContainer}>
                  <TouchableOpacity onPress={()=>{setHeaderName('모든 동네'); toggleModal()}}>
                    <View style={Styles.ModalMenu}>
                      <Text style={Styles.ModalMenuText}>모든 동네</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setHeaderName('우리 동네'); toggleModal()}}>
                    <View style={Styles.ModalMenu}>
                      <Text style={Styles.ModalMenuText}>우리 동네</Text>
                    </View>
                  </TouchableOpacity >
                  <TouchableOpacity onPress={()=>{setHeaderName('내 친구 글'); toggleModal()}}>
                    <View style={Styles.ModalMenu}>
                      <Text style={Styles.ModalMenuText}>내 친구 글</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setHeaderName('질문 있어요'); toggleModal()}}>
                    <View style={Styles.ModalMenu}>
                      <Text style={Styles.ModalMenuText}>질문 있어요</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Modal>




            </View>
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
          {/* Header End */}
          {HeaderName ==='모든 동네' ? (
            <>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.ScrollView}>
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
              </ScrollView> 
            </>
          ): null}       

          {HeaderName ==='우리 동네' ? (
            <>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.ScrollView}>
                <View>
                  <Text style={{color:'#282828',}}>우리 동네</Text>
                </View>
              </ScrollView> 
            </>
          ): null}  

          {HeaderName ==='내 친구 글' ? (
            <>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.ScrollView}>
                <View>
                  <Text style={{color:'#282828',}}>내 친구 글</Text>
                </View>
              </ScrollView> 
            </>
          ): null}            

          {HeaderName ==='질문 있어요' ? (
            <>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.ScrollView}>
                <View>
                  <Text style={{color:'#282828',}}>질문 있어요</Text>
                </View>
              </ScrollView> 
            </>
          ): null}      
      </View>
    </>
  );
}

export default CommunityScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
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
  ModalContainer: {
    marginTop: 'auto',
    marginBottom: -20,
    marginHorizontal: -20,
    flex: 0.3,
    backgroundColor:'#fff',
    borderTopStartRadius:30,
    borderTopRightRadius:30,
    justifyContent:'space-evenly',
  },
  ModalMenuText: {
    color:'#282828', 
    textAlign:'center',
    fontSize: 16,
    fontWeight:'600',
  },
  ModalMenu: {
    paddingVertical: 5,
  },
  ScrollView: {
    paddingTop: 10,
    paddingBottom: 200,
  }
});
