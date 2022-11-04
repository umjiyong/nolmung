import React, {useState} from "react";
import { StyleSheet,View,Text, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal";

const MyWalkRecordInfo = (Props) => {
    const km = 11
    const time = '11:30'
    const perc = 120
    const backdropOpacity = 0.1
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        console.log(isModalVisible)
    };
    return (
        <>
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={Styles.infoContainer}>
                    <View style={{width: 100, height: 100, backgroundColor:'white'}}></View>
                    <View style={Styles.infos}>
                        <View style={{alignItems:'center',}}>
                            <Text style={Styles.infoText}>총 거리</Text>    
                            <Text style={Styles.infoTextColor}>{km}Km</Text>    
                        </View>
                        <View style={{alignItems:'center',}}>
                            <Text style={Styles.infoText}>산책 시간</Text>    
                            <Text style={Styles.infoTextColor}>{time}</Text>    
                        </View>
                        <View style={{alignItems:'center',}}>
                            <Text style={Styles.infoText}>총 거리</Text>    
                            <Text style={Styles.infoTextColor}>{perc}%</Text>    
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                backdropOpacity = {backdropOpacity}
            >
                <View style={Styles.ModalContainer}>
                    <View style={{flex:1,width: '100%', height: 200, backgroundColor:'#959595', marginBottom:30,}}></View>
                    <View style={{flex:0.5,flexDirection:'row', justifyContent:'space-between', marginBottom:20,}}>
                        <View style={Styles.ModalInfoBox}>
                            <Text style={Styles.ModalInfoBoxText}>총 거리</Text>
                            <Text style={Styles.ModalInfoBoxTextColor}>{km}Km</Text>
                        </View>
                        <View style={Styles.ModalInfoBox}>
                            <Text style={Styles.ModalInfoBoxText}>산책 시간</Text>
                            <Text style={Styles.ModalInfoBoxTextColor}>{time}</Text>
                        </View>
                        <View style={Styles.ModalInfoBox}>
                            <Text style={Styles.ModalInfoBoxText}>목표 달성률</Text>
                            <Text style={Styles.ModalInfoBoxTextColor}>{perc}%</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{backgroundColor:'#f1f1f1', width:150, height: 150}}></View>
                        <View style={{backgroundColor:'#f1f1f1', width:150, height: 150}}></View>
                    </View>
                </View>
            </Modal>
        </>
        
    )

}

export default MyWalkRecordInfo;

const Styles = StyleSheet.create({
    infoContainer: {
        marginVertical:5,
        borderRadius: 15,
        backgroundColor:'#fff',
        shadowColor:'#000',
        elevation:2,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 30,
        flexDirection:'row',
    },
    infoText:{
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
        width: '70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    ModalContainer:{
        flex:0.93,
        backgroundColor:'#fff',
        marginTop:'auto',
        marginBottom: -20,
        marginHorizontal:-20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal:20,
        paddingTop: 30,
    },
    ModalInfoBox:{
        width: 105,
        height: 100,
        backgroundColor:'white',
        shadowColor:'#282828',
        elevation:3,
        paddingVertical:20,
        paddingHorizontal:25,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'

    },
    ModalInfoBoxText:{
        color:'#282828',
        fontSize: 13, 
        fontWeight:'600',
        marginBottom: 10,
        textAlign:'center'
    },
    ModalInfoBoxTextColor:{
        color:'#FF772F',
        fontSize: 14, 
        fontWeight:'600',

    }
})