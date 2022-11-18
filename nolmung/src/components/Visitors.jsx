import React from "react";
import { StyleSheet,View, Text, Image } from "react-native";

const Visitors = () => {
    return (
        <>
            <Image 
                source={require('../assets/icons/man1Avatar.png')}
                resizeMode="contain"    
                style={{
                    marginHorizontal:10,
                }}
            />
  
        </>
    )
}

export default Visitors

const Styles = StyleSheet.create({

})