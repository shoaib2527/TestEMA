import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SelectCity from '../screens/SelectCity';
import WeatherReport from '../screens/WeatherReport';
import Map from '../screens/Map';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
        <Stack.Screen name="SelectCity" component={SelectCity} />
        <Stack.Screen name="WeatherReport" component={WeatherReport} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

