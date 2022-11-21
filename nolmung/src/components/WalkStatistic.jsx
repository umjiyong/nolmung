import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {getMyPuppyList, getWalkStatistics} from '../api/Walk.js';
import WalkPuppyList from './WalkPuppyList';

const WalkStatistic = () => {
  const [select, setSelect] = useState('date');
  const [puppyList, setPuppyList] = useState([]);
  const [statistic, setStatistic] = useState([]);
  const [selectId, setSelectId] = useState();

  const getMyPuppyListFunc = async userId => {
    try {
      await getMyPuppyList(
        {
          userId: 1,
        },
        response => {
          setPuppyList(response.data.myPuppyList);
        },
        err => {
          console.log('강아지 목록 에러', err);
        },
      );
    } catch (error) {
      console.log(error);
      console.log('강아지 목록 조회 에러');
    }
  };

  const getWalkStatisticsFunc = async puppyId => {
    try {
      await getWalkStatistics(
        {
          puppyId: puppyId,
        },
        response => {
          // console.log(response.data.result);
          setStatistic(response.data.result);
        },
      );
    } catch (error) {
      console.log(error);
      console.log('산책 통계 에러');
    }
  };

  // chart dummy data
  const data = {
    labels: statistic.dateList,
    datasets: [
      {
        data: statistic.attainment,
      },
    ],
  };

  // 화면 너비
  const screenWidth = Dimensions.get('window').width;

  //chartconfig
  const chartConfig = {
    backgroundGradientFrom: '#F5F5F5',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#F5F5F5',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 88, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  useEffect(() => {
    getMyPuppyListFunc();
  }, []);

  useEffect(() => {
    getWalkStatisticsFunc(selectId);
  }, [selectId]);

  return (
    <>
      <View style={Styles.WalkStatisticContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: 20}}
          style={Styles.DogContainer}>
          {puppyList?.length > 0 ? (
            <>
              {puppyList.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => setSelectId(item.puppyId)}
                    key={index}>
                    <WalkPuppyList Props={item.puppyInfo} />
                  </Pressable>
                );
              })}
            </>
          ) : (
            <Text style={{color: '#282828'}}>강아지 목록이 없습니다.</Text>
          )}
        </ScrollView>

        {select === 'date' ? (
          <>
            <View style={Styles.statistic}>
              <View>
                {statistic?.attainment?.length > 0 ? (
                  <BarChart
                    style={Styles.charts}
                    data={data}
                    width={screenWidth}
                    height={220}
                    withInnerLines={false}
                    withVerticalLabels={true}
                    withHorizontalLabels={false}
                    chartConfig={chartConfig}
                    showValuesOnTopOfBars={true}
                  />
                ) : null}
              </View>
            </View>
          </>
        ) : null}
      </View>
      {statistic.length > 0 ? (
        <View>
          <Text>1</Text>
        </View>
      ) : null}
    </>
  );
};

export default WalkStatistic;

const Styles = StyleSheet.create({
  WalkStatisticContainer: {
    marginHorizontal: 20,
  },
  DogContainer: {},
  selectBox: {
    marginHorizontal: 40,
    marginTop: 30,
    backgroundColor: '#EF905E',
    flex: 0.15,
    borderRadius: 50,
  },

  selectBtn: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  SelectText: {
    color: '#282828',
    fontWeight: '600',
    fontSize: 16,
  },
  NoSelectText: {
    color: '#959595',
    fontSize: 16,
  },
  statistic: {
    marginTop: 30,
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  charts: {
    paddingRight: 15,
  },
});
