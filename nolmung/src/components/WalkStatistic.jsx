import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const WalkStatistic = () => {
  const [select, setSelect] = useState('date');
  const selectDate = () => {
    setSelect('date');
    console.log(select);
  };

  const selectWeek = () => {
    setSelect('week');
    console.log(select);
  };

  const selectMonth = () => {
    setSelect('month');
    console.log(select);
  };

  // chart dummy data
  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 55],
      },
    ],
  };

  const weekData = {
    labels: ['1주', '2주', '3주', '4주', '5주'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const monthData = {
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
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

  const monthChartConfig = {
    backgroundGradientFrom: '#F5F5F5',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#F5F5F5',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 88, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <>
      <View style={Styles.WalkStatisticContainer}>
        <View style={Styles.DogContainer}>
          <View style={{alignItems: 'center', marginRight: 20}}>
            <Image
              source={require('../assets/icons/DogImg.png')}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />
            <Text style={{color: '#282828'}}>땅콩이</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/DogImg.png')}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />
            <Text style={{color: '#282828'}}>땅콩이</Text>
          </View>
        </View>

        <View style={Styles.selectBox}>
          <View style={Styles.selectBtn}>
            <Pressable onPress={selectDate}>
              <Text
                style={
                  select === 'date' ? Styles.SelectText : Styles.NoSelectText
                }>
                일간
              </Text>
            </Pressable>
            <Pressable onPress={selectWeek}>
              <Text
                style={
                  select === 'week' ? Styles.SelectText : Styles.NoSelectText
                }>
                주간
              </Text>
            </Pressable>
            <Pressable onPress={selectMonth}>
              <Text
                style={
                  select === 'month' ? Styles.SelectText : Styles.NoSelectText
                }>
                월간
              </Text>
            </Pressable>
          </View>
        </View>
        {select === 'date' ? (
          <>
            <View style={Styles.statistic}>
              <View>
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
              </View>
            </View>
          </>
        ) : null}
        {select === 'week' ? (
          <>
            <View style={Styles.statistic}>
              <View>
                <BarChart
                  style={Styles.charts}
                  data={weekData}
                  width={screenWidth}
                  height={220}
                  withInnerLines={false}
                  withVerticalLabels={true}
                  withHorizontalLabels={false}
                  chartConfig={chartConfig}
                  showValuesOnTopOfBars={true}
                />
              </View>
            </View>
          </>
        ) : null}
        {select === 'month' ? (
          <>
            <View style={Styles.statistic}>
              <View>
                <BarChart
                  style={Styles.charts}
                  data={monthData}
                  width={screenWidth}
                  height={220}
                  withInnerLines={false}
                  withVerticalLabels={true}
                  withHorizontalLabels={false}
                  chartConfig={monthChartConfig}
                  showValuesOnTopOfBars={true}
                />
              </View>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
};

export default WalkStatistic;

const Styles = StyleSheet.create({
  WalkStatisticContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  DogContainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
