import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';

const WalkPuppyList = Props => {
  return (
    <>
      <View style={{alignItems: 'center', marginRight: 15}}>
        <Image
          source={{uri: Props.Props.puppyImg}}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />
        <Text style={{color: '#282828'}}>{Props.Props.puppyName}</Text>
      </View>
    </>
  );
};

export default WalkPuppyList;

const Styles = StyleSheet.create({});
