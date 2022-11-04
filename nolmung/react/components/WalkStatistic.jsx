import React, {useState} from "react";
import { StyleSheet,View, Text, Image, Pressable,TouchableOpacity } from "react-native";

const WalkStatistic = () => {
    const [select, setSelect] = useState('date')
    const selectDate = () => {
        setSelect('date')
        console.log(select)
    }

    const selectWeek = () => {
        setSelect('week')
        console.log(select)
    }

    const selectMonth = () => {
        setSelect('month')
        console.log(select)
    }
    return (
        <>
            <View style={Styles.WalkStatisticContainer}>
                <View style={Styles.DogContainer}>
                    <View style={{alignItems:'center', marginRight: 20,}}>
                        <Image 
                            source={require('../assets/icons/DogImg.png')}
                            resizeMode="contain"
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius:50,
                            }}
                        />
                        <Text style={{color:'#282828',}}>땅콩이</Text>
                    </View>
                    <View style={{alignItems:'center',}}>
                        <Image 
                            source={require('../assets/icons/DogImg.png')}
                            resizeMode="contain"
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius:50,
                            }}
                        />
                        <Text style={{color:'#282828',}}>땅콩이</Text>
                    </View>
                </View>

                <View style={Styles.selectBox}>
                    <View style={Styles.selectBtn}>
                        <Pressable onPress={selectDate}>
                                <Text style={select==='date' ? Styles.SelectText : Styles.NoSelectText}>일간</Text>
                        </Pressable>
                        <Pressable onPress={selectWeek}>
                                <Text style={select==='week' ? Styles.SelectText : Styles.NoSelectText}>주간</Text>
                        </Pressable>
                        <Pressable onPress={selectMonth}>
                                <Text style={select==='month' ? Styles.SelectText : Styles.NoSelectText}>월간</Text>
                        </Pressable>
                    </View>
                </View>
                {select === 'date' ? (
                    <>
                        <View style={Styles.statistic}>
                            <View>
                                <Text>ㅎㅇ</Text>
                            </View>
                        </View>
                    </>
                ) : null}
                {select === 'week' ? (
                    <>
                        <View style={Styles.statistic}>
                            <View>
                                <Text>ㄹㅇ</Text>
                            </View>
                        </View>
                    </>
                ) : null}
                {select === 'month' ? (
                    <>
                        <View style={Styles.statistic}>
                            <View>
                                <Text>ㅁㅇ</Text>
                            </View>
                        </View>
                    </>
                ) : null}
                
            </View>
        </>
    )
}

export default WalkStatistic;

const Styles = StyleSheet.create({
    WalkStatisticContainer: {
        flex : 1,
        marginHorizontal:20,
    },
    DogContainer:{
        flex: 0.15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    selectBox:{
        marginHorizontal:40,
        marginTop: 10,
        flex: 0.05,
        borderRadius:50,
    },

    selectBtn: {
        marginTop: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    SelectText: {
        color:'#282828',
        fontWeight:'600',
        fontSize: 16,
    },
    NoSelectText: {
        color: '#959595',
        fontSize: 16,
    },
    statistic:{
        marginTop: 30,
        backgroundColor:'#999',
        flex: .4,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
    }
})