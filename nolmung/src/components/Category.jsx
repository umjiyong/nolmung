import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";


const Category = (Props) => {
    const [select, setSelect] = useState(false)
    const onPress = () => {
        setSelect(prev => !prev)
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={select ? Styles.SelectedCategory : Styles.Category}>
                <Text style={Styles.categoryText}>{Props.category}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Category


const Styles = StyleSheet.create({
    categoryText:{
        color: '#fff',
    },
    SelectedCategory:{
        backgroundColor:'#FF772F',
        marginHorizontal:10,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,

    },

    Category:{
        backgroundColor:'#959595',
        marginHorizontal:10,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
    }
})