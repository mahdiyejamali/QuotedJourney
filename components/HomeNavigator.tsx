import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { QuoteDisplay } from './QuoteDisplay';
import { ImageBackground } from 'react-native';
import { MINDFUL_TAGS } from '../api/providers/quotable';

export const NAVIGATIONS = {
  HOME: 'Home',
  MINDFUL_QUOTE_DISPLAY: 'QuoteDisplay'
};

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name={NAVIGATIONS.HOME} component={HomeScreen}/>
    <Screen name={NAVIGATIONS.MINDFUL_QUOTE_DISPLAY} component={QuoteDisplay} initialParams={{ tags: MINDFUL_TAGS }} />
  </Navigator>
);

// const navigationTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'transparent',
//   },
// };
// const backgroundImage = require('../assets/background.png');

export const AppNavigator = () => (
  // <ImageBackground source={backgroundImage}>
    <NavigationContainer>    
      <HomeNavigator/>
    </NavigationContainer>
  // </ImageBackground>
);
