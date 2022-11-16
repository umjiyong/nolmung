import React, {useState,useEffect} from 'react';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import DogListItem from './DogListItem';
import {useNavigation} from '@react-navigation/native';
import Modal from "react-native-modal"
import SearchDogList from './SearchDogList';
import {puppy_breed_info} from '../api/Puppy';
const DogModify = () => {
  const navi = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
        setModalVisible(!isModalVisible);
        console.log(isModalVisible)
    };

  const [isModalVisibleTwo, setModalVisibleTwo] = useState(false)
  const toggleModalTwo = () => {
    setModalVisibleTwo(!isModalVisibleTwo);

  }
    
  const backdropOpacity = 0.3
  const [DogName, setDogName] = useState('두부');
  const onChangeText = event => {
    setDogName(event);
  };

  const [DogSeed, setDogSeed] = useState('믹스견');
  const onChangeSeed = event => {
    setDogSeed(event);
  };

  const [year, setYear] = useState('1997');
  const [month, setMonth] = useState('05');
  const [date, setDate] = useState('30');

  const onChangeYear = event => {
    setYear(event);
  };
  const onChangeMonth = event => {
    setMonth(event);
  };
  const onChangeDate = event => {
    setDate(event);
  };

  const [dogWeight, setDogWeight] = useState('3');
  const onChangeWeight = event => {
    setDogWeight(event);
  };

  const [dogChar, setDogChar] = useState('성격을 입력해주세요');
  const onChangeDogChar = e => {
    setDogChar(e);
  };

  const [selectSex, setSelectSex] = useState();
  const onChangeMan = () => {
    setSelectSex('man');
  };
  const onChangeWoman = () => {
    setSelectSex('woman');
  };
  const [selectNeut, setSelectNeut] = useState();
  const onChangeO = () => {
    setSelectNeut('O');
  };
  const onChangeX = () => {
    setSelectNeut('X');
  };
  const [hasDog, setHasDog] = useState()
  const HasDog = () => {
    setHasDog(true)
    setModalVisible(false)
    toggleModalTwo()

  }
  const NoHasDog = () =>{
    setHasDog(false)
  }
  const [text, setText] = useState('')
  const [search, setSearch] = useState(false)
  const searchDog = () => {
    setSearch(!search)
    console.log(search)
  }

  const [allBreedList, setAllBreedList] = useState()

  const [selectBreed, setSelectBreed] = useState('터치해서 견종을 선택해주세요')

  const [isModalVisibleBreed, setModalVisibleBreed] = useState(false)
  const toggleModalBreed = () => {
    setModalVisibleBreed(!isModalVisibleBreed);

  }

  const getBreed_List_Func = async () => {
    try {
      await puppy_breed_info(
        (response) => {
          setAllBreedList(response.data);
        },
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };

  
  useEffect(() => {
    getBreed_List_Func()
  }, []);
  // console.log(allBreedList.breedList)
  return (
    <>
      {/*  */}

      <ScrollView horizontal={true} style={Styles.DogList}>
        <TouchableOpacity
          // onPress={() => {
          //   navi.push('AddDogInfo');
          // }}>
          onPress={toggleModal}
          >
          <View style={Styles.plusDog}>
            <Text style={{fontSize: 40, fontWeight: '500', color: '#fff'}}>
              +
            </Text>
          </View>
        </TouchableOpacity>

        <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            backdropOpacity = {backdropOpacity}    
        >
            <View style={{backgroundColor:'white', flex: 0.2, borderRadius:30, justifyContent:'space-around', alignItems:'center'}}>
              <Text style={{color:'#282828', fontSize: 16, textAlign:'center'}}>이미 강아지가 있으신가요?</Text> 
              <View style={{flexDirection:'row',}}>
                <Pressable onPress={HasDog} style={{marginRight: 40,}}>
                  <Text style={{fontSize: 15, color:'#FF772F'}}>예</Text>
                </Pressable>     
                <Pressable onPress={()=>{navi.navigate('AddDogInfo'); NoHasDog}}>
                  <Text style={{fontSize: 15, color:'#959595'}}>아니요</Text>
                </Pressable>
              </View>
            </View>
        </Modal>      

        <Modal
            isVisible={isModalVisibleTwo}
            onBackdropPress={toggleModalTwo}
            backdropOpacity = {backdropOpacity}    
        >
           <View style={Styles.modal}>
              <Text style={Styles.ModalText}>강아지 코드 입력</Text>
              <View style={{flexDirection:'row', alignItems:'center',}}>
                <TextInput onChangeText={(e)=>setText(e)} value={text} style={Styles.ModalInput}/>
                <TouchableWithoutFeedback onPress={searchDog}>
                  <View>
                    <Image 
                      source={require('../assets/icons/search.png')}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 13,
                        marginLeft: 10,
                        tintColor: '#FF772F'
                      }}/>
                  </View>  
                </TouchableWithoutFeedback>
              </View>
              {search ? <View><SearchDogList/></View> : null }
          </View>
        </Modal>        

        <DogListItem />
        <DogListItem />
        <DogListItem />
      </ScrollView>
      <ScrollView style={Styles.DogContainer}>
        <View style={Styles.DogImage}>
          <Image
            source={require('../assets/image/Dog1.jpg')}
            resizeMode="contain"
            style={{
              width: 102,
              height: 102,
              borderRadius: 50,
            }}
          />
          <Text style={{color: '#282828', marginTop: 6, fontSize: 14}}>
            강아지 프로필
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            강아지 이름
          </Text>
          <TextInput
            onChangeText={onChangeText}
            onFocus={() => setDogName('')}
            value={DogName}
            style={{
              color: '#282828',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View style={{marginBottom: 20}}>
          
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            견종
          </Text>
          <Pressable onPress={toggleModalBreed}>
            <Text style={{
                color: '#282828',
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal:5,
                paddingVertical:3,
                }}>
                  {selectBreed}
            </Text>
          </Pressable>
          <Modal
            isVisible={isModalVisibleBreed}
            onBackdropPress={toggleModalBreed}
            backdropOpacity = {backdropOpacity}    
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical:20,paddingHorizontal:10,backgroundColor:'white', flex: 0.5, borderRadius: 30,}}>
              {allBreedList!== undefined ? 
                (
                  // {console.log(allBreedList.breedList)}
                  <>
                    {(allBreedList.breedList).map((item)=>{
                      return (
                        <>
                          <TouchableOpacity onPress={()=>{setSelectBreed(item.breedName); toggleModalBreed();}} style={{alignItems:'center', marginVertical:20,}} key={item.breedId}>
                            <Text style={{color:'#282828', fontSize: 16, fontWeight: '500',}}>{item.breedName}</Text>
                          </TouchableOpacity> 
                        </>
                      )
                    })}
                  </>
                )
              :null}
          
            </ScrollView>
        </Modal>      
           
       
        </View>
        <View>
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            생년월일
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              maxLength={4}
              keyboardType="number-pad"
              onChangeText={onChangeYear}
              style={Styles.BirthConatiner}
              value={year}
            />
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={onChangeMonth}
              style={{marginHorizontal: 6, ...Styles.BirthConatiner}}
              value={month}
            />
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={onChangeDate}
              style={Styles.BirthConatiner}
              value={date}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            몸무게
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              keyboardType="number-pad"
              onChangeText={onChangeWeight}
              onFocus={() => setDogWeight('')}
              value={dogWeight}
              style={{color: '#282828', marginTop: -15}}
            />
            <Text style={{color: '#282828'}}>Kg</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              marginTop: -5,
            }}></View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#282828',
                fontWeight: '600',
                fontSize: 16,
                marginBottom: 10,
              }}>
              강아지 성격
            </Text>
            <Text style={{color: '#959595'}}>(최대 40자)</Text>
          </View>
          <TextInput
            maxLength={40}
            multiline={true}
            onChangeText={onChangeDogChar}
            onFocus={() => setDogChar('')}
            value={dogChar}
            style={{
              textAlign: 'center',
              color: '#282828',
              height: 70,
              borderColor: '#959595',
              borderWidth: 1,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            강아지 성별
          </Text>
          <View style={Styles.BtnContainer}>
            {/*  */}
            <TouchableWithoutFeedback onPress={onChangeMan}>
              <View
                style={
                  selectSex == 'man' ? Styles.SelectsexBtn : Styles.sexBtn
                }>
                <Text
                  style={
                    selectSex == 'man' ? Styles.SelectBtnText : Styles.BtnText
                  }>
                  남성
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onChangeWoman}>
              <View
                style={
                  selectSex == 'woman' ? Styles.SelectsexBtn : Styles.sexBtn
                }>
                <Text
                  style={
                    selectSex == 'woman' ? Styles.SelectBtnText : Styles.BtnText
                  }>
                  여성
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#282828',
              fontWeight: '600',
              fontSize: 16,
              marginBottom: 10,
            }}>
            강아지 중성화 여부
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/*  */}
            <TouchableWithoutFeedback onPress={onChangeO}>
              <View
                style={
                  selectNeut == 'O' ? Styles.SelectNeutBtn : Styles.NeutBtn
                }>
                <Text
                  style={
                    selectNeut == 'O' ? Styles.SelectBtnText : Styles.BtnText
                  }>
                  O
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onChangeX}>
              <View
                style={
                  selectNeut == 'X' ? Styles.SelectNeutBtn : Styles.NeutBtn
                }>
                <Text
                  style={
                    selectNeut == 'X' ? Styles.SelectBtnText : Styles.BtnText
                  }>
                  X
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#D9D9D9',
          marginHorizontal: 20,
          marginTop: 25,
          paddingVertical: 4,
          borderRadius: 10,
        }}>
        <TouchableOpacity>
          <Text style={{textAlign: 'center'}}>강아지 정보 삭제</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.completeBtn}>
        <Text style={{color: '#fff', fontWeight: '500'}}>수정 완료</Text>
      </TouchableOpacity>
    </>
  );
};

export default DogModify;

const Styles = StyleSheet.create({
  DogList: {
    // flexDirection:'row',
    // justifyContent:'flex-start',
    // alignItems:'center',

    height: 100,
    backgroundColor: '#FFD9C6',
  },
  DogContainer: {
    marginHorizontal: 20,
  },
  plusDog: {
    marginTop: 15,
    width: 60,
    height: 60,
    backgroundColor: '#FF8544',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  DogImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  BirthConatiner: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    color: '#282828',
    paddingVertical: 6,
    paddingHorizontal: 42,
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sexBtn: {
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderWidth: 1,
    borderColor: '#FF8544',
    borderRadius: 10,
  },
  BtnText: {
    color: '#FF8544',
    fontSize: 16,
  },
  SelectBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  SelectsexBtn: {
    backgroundColor: '#ff8544',
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderWidth: 1,
    borderColor: '#FF8544',
    borderRadius: 10,
  },
  SelectNeutBtn: {
    backgroundColor: '#ff8544',
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderWidth: 1,
    borderColor: '#FF8544',
    borderRadius: 10,
  },
  NeutBtn: {
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderWidth: 1,
    borderColor: '#FF8544',
    borderRadius: 10,
  },
  completeBtn: {
    marginTop: 40,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF772F',
  },
  modal : {
    flex:0.5,
    marginHorizontal: -20,
    height: '50%', 
    backgroundColor: '#fff', 
    marginTop:'auto',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    alignItems:'center',
    paddingTop: 15,
    marginBottom: -20,
  },
  ModalText: {
    color: '#282828',
    fontWeight:'600',
    fontSize: 18,
  },
  ModalInput: {
    borderWidth: 0.5,
    borderColor: '#525252',
    width: '80%',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    color: '#282828',
    paddingHorizontal: 20,
    textAlign:'center'

  }

});
