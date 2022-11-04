import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DogListItem = () => {
    const DogName= '두부'
    return (
        <>
            <View style={{alignItems:'center', marginTop: 15, marginRight: 20,}}>
                <View style={Styles.DogListItemContainer}>
                    <Image 
                        source={require('../assets/image/Dog1.jpg')}
                        resizeMode="contain"
                        style={Styles.DogListItemContainer}
                    />
                    <Text style={{color: '#252525',fontSize: 14,}}>{DogName}</Text> 
                </View>
            </View>
        </>
    )
}

export default DogListItem;

const Styles = StyleSheet.create({
    DogListItemContainer: {
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        
    }
})