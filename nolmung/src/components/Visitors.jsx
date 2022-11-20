import React from "react";
import { StyleSheet,View, Text, Image } from "react-native";
require('../assets/icons/man1Avatar.png')
const Visitors = (Props) => {
    // console.log("보드 사진",Props.profileImg)
    return (
        <>
            {Props.profileImg ? <Image 
                    source={{uri : Props.profileImg}}
                    resizeMode="contain"    
                    style={{
                        width : 60,
                        height : 60,
                        marginHorizontal:10,
                    }}
                /> : <Image 
                source={require('../assets/icons/man1Avatar.png')}
                resizeMode="contain"    
                style={{
                    width : 60,
                    height : 60,
                    marginHorizontal:10,
                }}
                /> }
            
  
        </>
    )
}

export default Visitors

const Styles = StyleSheet.create({

})