import React from 'react';
import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const dogName = '지용';

// const doginfo_sex = '남(중성화 했어요)'
// const doginfo_character = '나빠요'
// const doginfo_weight = 3
const doginfo_walkAmount = 3;
const doginfo_complete = 100;

const MyDog = (Props) => {
  console.log(Props.puppyId)
  const doginfo_species = Props.breedName;
  const doginfo_age = Props.puppyAge;
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => {navigation.push('MyDogInfo',{ puppyId: Props.puppyId })}}>
      <View  style={Styles.container}>
        <View style={Styles.dogInfo}>
          <Image
            source={{uri : Props.puppyImg}}
            resizeMode="contain"
            style={{
              width: 125,
              height: 120,
              borderRadius: 15,
            }}
          />
          <View style={{}}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHead}>
                <Text style={Styles.infoText}>{Props.puppyName}</Text>
                <Text style={Styles.infoText}>
                  ({doginfo_species}, {doginfo_age}세)
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={Styles.infoContent}>
                  <Text style={{fontWeight: '600', ...Styles.ContentText}}>
                    권장 산책량
                  </Text>
                  <Text style={Styles.ContentTextMin}>
                    {doginfo_walkAmount}분
                  </Text>
                </View>
                <View style={Styles.infoContent}>
                  <Text style={{fontWeight: '600', ...Styles.ContentText}}>
                    산책 달성량
                  </Text>
                  <Text style={Styles.ContentTextComplete}>
                    {doginfo_complete}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyDog;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    height: 140,
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 8,
    paddingLeft: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  dogInfo: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: 40,
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  infoText: {
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
  },
  infoContent: {
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  ContentText: {
    marginTop: -5,
    marginBottom: 5,
    fontSize: 15,
    color: '#838383',
    marginRight: 5,
    textAlign: 'center',
  },
  ContentTextMin: {
    fontSize: 20,
    color: '#FF772F',
    textAlign: 'center',
    fontWeight: '700',
  },
  ContentTextComplete: {
    fontSize: 20,
    color: '#FF772F',
    // color: '#30ABBA',
    textAlign: 'center',
    fontWeight: '700',
  },
});
