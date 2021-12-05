import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RNLocation from 'react-native-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { selectCity } from '../../redux/Actions/City';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default () => {
  const mapRef = useRef(null)
  const city = useSelector(selectCity)
  const [userLocation, setUserLocation] = useState<any>(null)
  RNLocation.configure({
    distanceFilter: 5.0
  })
  const getLocation = () => {
    if (userLocation) {
      recenter({
        ...userLocation,
        latitudeDelta: 0.035,
        longitudeDelta: 0.0321
      })
      return
    }
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        RNLocation.getLatestLocation({ timeout: 6000 })
          .then(latestLocation => {
            setUserLocation(latestLocation)
            recenter({
              ...latestLocation,
              latitudeDelta: 0.035,
              longitudeDelta: 0.0321
            })
          })
      }
    })
  }
  const recenter = (region: any) => {
    mapRef.current.animateToRegion(region, 1500)
  }
  return (
    <ScreenWrapper transclucent statusBarColor={AppColors.transparent}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          showsMyLocationButton={false}
          showsCompass={false}
          initialRegion={{
            latitude: Number(city.lat),
            longitude: Number(city.lng),
            latitudeDelta: 0.035,
            longitudeDelta: 0.0321,
          }}
        >
        </MapView>
        <TouchableOpacity style={styles.buttonContainer} onPress={getLocation}>
          <Text style={styles.text}>Where am I?</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
};
