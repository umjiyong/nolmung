import React from "react";
import { StyleSheet,ScrollView, Text, View } from "react-native";
import CutOffListItem from "../Components/CutOffListItem";
import GoBackHeader from "../Components/GoBackHeader";

const CutOffList = ()=>{
    return (
        <>
            <GoBackHeader HeaderName="차단 목록" />
            <ScrollView style={Styles.cutoffContainer}>
                <CutOffListItem name = "이지영" />
                <CutOffListItem name = "김태경"/>
                <CutOffListItem name = "박찬혁"/>
                <CutOffListItem name = "이동희"/>
                <CutOffListItem name = "박세원"/>
            </ScrollView>
        </>
    )
}

export default CutOffList;

const Styles = StyleSheet.create({
    cutoffContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
    }
})