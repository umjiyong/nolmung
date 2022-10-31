import React from "react";
import { Image, View } from "react-native";

const MyFamily = (props) => {
    return (
        <>
            <View style={{marginBottom: 10, marginHorizontal:10,}}>
                <Image 
                source={props.img}
                resizeMode="cover"
                style={{
                    
                }}    
                />
            </View>
        </>

    )
}

export default MyFamily;