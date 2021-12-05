import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BGImage from '../../assets/images/bg.jpg';
import Button from '../../components/Button';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { selectAllCities, setCity } from '../../redux/Actions/City';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { CityType } from '../../utills/types'
export default function Dashboard(props) {
  const AllCities = useSelector(selectAllCities)
  const dispatch = useDispatch()
  type ItemType = {
    item: CityType
  }
  const onPressCity = (city: CityType) => {
    dispatch(setCity(city))
    props.navigation.navigate('WeatherReport')
  }
  const renderCity = ({ item }: ItemType) => {
    return <TouchableOpacity style={styles.cityContainer} onPress={() => onPressCity(item)}>
      <Text style={styles.cityName}>{item.city}</Text>
    </TouchableOpacity>
  }
  return (
    <ScreenWrapper backgroundImage={BGImage} transclucent statusBarColor={AppColors.transparent} barStyle={'dark-content'}>
      <View style={styles.mainViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>CHOOSE YOUR CITY</Text>
        </View>
        <FlatList
          data={AllCities}
          renderItem={renderCity}
          keyExtractor={item => item.city}
        />
      </View>
    </ScreenWrapper>
  );
}
