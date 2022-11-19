import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyWalkRecordInfo from './MyWalkRecordInfo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {compareAsc, format} from 'date-fns';
import {getPuppyList} from '../api/WalkRecord.js';

const MyWalkRecord = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [walkRecordList, setWalkRecordList] = useState([]);

  const getPuppyListFunc = async day => {
    try {
      await getPuppyList(
        {
          userId: 1,
          walkDate: day,
        },
        response => {
          // console.log(response.data);
          setPuppyList(response.data.puppyList);
        },
        err => {
          console.log('강아지 목록 에러', err);
        },
      );
    } catch (error) {
      console.log(err);
      console.log('강아지 목록 조회 에러');
    }
  };

  const getRecordListFunc = async (puppyId, day) => {
    try {
      await getRecordList(
        {
          puppyId: 1,
          walkDate: day,
        },
        response => {
          console.log(response);
          setWalkRecordList(response);
        },
        err => {
          console.log('산책 목록 에러', err);
        },
      );
    } catch (error) {
      console.log(err);
      console.log('산책 목록 조회 에러');
    }
  };

  const posts = [];

  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <>
      <ScrollView>
        <View style={Styles.myWalkRecordContainer}>
          <Calendar
            style={Styles.calendar}
            markedDates={markedSelectedDates}
            theme={{
              selectedDayBackgroundColor: '#009688',
              arrowColor: '#009688',
              dotColor: '#009688',
              todayTextColor: '#009688',
            }}
            onDayPress={day => {
              setSelectedDate(day.dateString);
              getPuppyListFunc(day.dateString);
            }}
          />
        </View>
        {/* 강아지 마리수 프로필 div start */}

        <View style={Styles.DogContainer}>
          {puppyList?.length > 0 ? (
            <>
              {puppyList.map((item, index) => {
                return (
                  <View
                    style={{alignItems: 'center', marginRight: 15}}
                    key={index}>
                    <Image
                      source={{uri: item.puppyImg}}
                      resizeMode="contain"
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text style={{color: '#282828'}}>{item.puppyName}</Text>
                  </View>
                );
              })}
            </>
          ) : (
            <Text style={{color: '#282828'}}>강아지가 없습니다.</Text>
          )}
        </View>
        {/* end */}
        <ScrollView
          style={{marginBottom: 80}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}>
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
          <MyWalkRecordInfo />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default MyWalkRecord;

const Styles = StyleSheet.create({
  myWalkRecordContainer: {
    marginHorizontal: 20,
  },
  DogContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
