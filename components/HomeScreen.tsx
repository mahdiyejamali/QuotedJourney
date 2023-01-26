import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { NAVIGATIONS } from './HomeNavigator';


export const HomeScreen = ({ navigation }: any) => {
  const navigateMindfulQuotes = () => {
    navigation.navigate(NAVIGATIONS.MINDFUL_QUOTE_DISPLAY);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Layout style={styles.container}>
          <Button style={styles.journeyButton} onPress={navigateMindfulQuotes}>Mindfulness Journey</Button>
          <Button style={styles.journeyButton} onPress={navigateMindfulQuotes}>Personal Growth Journey</Button>
          <Button style={styles.journeyButton} onPress={navigateMindfulQuotes}>Overcoming Fear Journey</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  journeyButton: {
    marginTop: 20,
    width: 300
  },
})
