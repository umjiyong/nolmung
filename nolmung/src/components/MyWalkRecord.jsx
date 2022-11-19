import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import MyWalkRecordInfo from './MyWalkRecordInfo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {compareAsc, format} from 'date-fns';
import {getPuppyList, getRecordList} from '../api/Walk.js';
import WalkPuppyList from './WalkPuppyList';

const MyWalkRecord = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [walkRecordList, setWalkRecordList] = useState([]);
  const [selectId, setSelectId] = useState();

  const getPuppyListFunc = async day => {
    try {
      await getPuppyList(
        {
          userId: 1,
          walkDate: day,
        },
        response => {
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
          puppyId: puppyId,
          walkDate: day,
        },
        response => {
          console.log(response.data.walkRecordList);
          setWalkRecordList(response.data.walkRecordList);
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

  useEffect(() => {
    getRecordListFunc(selectId, selectedDate);
  }, [selectId]);

  useEffect(() => {
    getRecordListFunc(selectId, selectedDate);
  }, [selectedDate]);

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
                  <Pressable
                    onPress={() => setSelectId(item.puppyId)}
                    key={index}>
                    <WalkPuppyList Props={item} />
                  </Pressable>
                );
              })}
            </>
          ) : (
            <Text style={{color: '#282828'}}>
              해당 일자에 산책 기록이 없습니다.
            </Text>
          )}
        </View>
        {/* end */}
        <ScrollView
          style={{marginBottom: 80}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}>
          {walkRecordList?.length > 0 ? (
            <>
              {walkRecordList.map((item, index) => {
                return <MyWalkRecordInfo key={index} Props={item} />;
              })}
            </>
          ) : null}
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
