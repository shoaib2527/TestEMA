import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import {
  LineChart
} from "react-native-chart-kit";
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { selectCity, selectWeatherReport } from '../../redux/Actions/City';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimensions';
import { CityType } from '../../utills/types';
import styles from './styles';
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Weather Forecast"] // optional
};
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 10,10, ${opacity})`,
  strokeWidth: 2, //
  barPercentage: 0.5,
};

export default function Dashboard(props) {
  const city: CityType = useSelector(selectCity)
  const weatherReport = useSelector(selectWeatherReport)
  return (
    <ScreenWrapper transclucent statusBarColor={AppColors.transparent}>
      <View style={styles.mainViewContainer}>
        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-KM2rH2o-RgT2oqg-JQ12Ed1Yx2dvKHVgA&usqp=CAU' }}
          style={styles.image} >
          <Text style={styles.cityName}>{city.city}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Temp</Text>
            <Text style={styles.value}>{weatherReport?.temp} F</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Feels Like</Text>
            <Text style={styles.value}>{weatherReport?.feels_like} F</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Humidity</Text>
            <Text style={styles.value}>{weatherReport?.humidity}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Pressure</Text>
            <Text style={styles.value}>{weatherReport?.pressure}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sea Level</Text>
            <Text style={styles.value}>{weatherReport?.sea_level}</Text>
          </View>
        </ImageBackground>
        <ScrollView horizontal style={{ height: height(50), marginBottom: height(2) }}>
          {weatherReport?.data &&
            <LineChart
              data={weatherReport.data}
              width={width(100) + width(100) + width(100) + width(100) + width(100)}
              height={height(50)}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          }
        </ScrollView>
        <Button title={"Open City on Map"} onPress={() => props.navigation.navigate('Map')} />
      </View>
    </ScreenWrapper>
  );
}
