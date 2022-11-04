import React, {useState} from "react";
import { Text, View,TouchableOpacity ,Image, StyleSheet, ScrollView,Dimensions, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal"

const CommentList = () => {
    const userNickName = 'aJumoney__'
    const region = '서울특별시 강남구 역삼동'
    const windowWidth = Dimensions.get('window').width;
    const like = 200
    const comment = 5
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
          setModalVisible(!isModalVisible);
          console.log(isModalVisible)
      };
    const backdropOpacity = 0.3

    return (
        <>
        {/* Comment Header start */}
            <View style={{paddingHorizontal:30,marginVertical:10,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Image 
                        source={require('../assets/icons/Ellipse13.png')}
                        resizeMode="cover"
                        style={{}}
                    />
                    <View style={{marginLeft: 5,}}>
                        <Text style={{color:'#282828', fontWeight:'600', fontSize:15,}}>유저네임</Text>
                        <Text style={{color:'#959595',}}>{region} 1시간 전</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={toggleModal}
                >
                    <Image 
                        source={require('../assets/icons/menuvertical.png')}
                        style={{
                            width: 24,
                            height: 24,
                        }}
                    />
                </TouchableWithoutFeedback>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={toggleModal}
                    backdropOpacity = {backdropOpacity}    
                >
                    <View style={Styles.threeModal}>
                    
                        <TouchableOpacity >
                            <View style={Styles.ModalMenu}>
                                <Text style={Styles.ModalMenuText}>삭제</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={Styles.ModalMenu}>
                                <Text style={Styles.ModalMenuText}>취소</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>        
            </View>
        {/* Comment Header End */}
            <View style={{paddingHorizontal:30,marginLeft: 60,}}>
                <Text style={{color:'#282828', textAlign:'left'}}>
                    강아지 너무 귀엽스므니다 이 아조씨 강아지 키우고 싶스므니다
                </Text>
            </View>
        </>
    )
}

export default CommentList;

const Styles = StyleSheet.create({
    threeModal:{
        marginTop: 'auto',
        marginBottom: -20,
        marginHorizontal: -20,
        flex: 0.2,
        backgroundColor:'#fff',
        borderTopStartRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-evenly',
    },
    ModalMenuText:{
        color:'#282828',
    },
    ModalMenu: {
        paddingVertical: 5,
    },
    ModalMenuText: {
        color:'#282828', 
        textAlign:'center',
        fontSize: 16,
        fontWeight:'600',
    },

})