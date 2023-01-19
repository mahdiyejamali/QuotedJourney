import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }: any) => {
  const navigateStory1 = () => {
    navigation.navigate('Story');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='My Mindful Journey' alignment='center'/>
      <Divider/>

      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateStory1}>Open Story 1</Button>
      </Layout>
    </SafeAreaView>
  );
};
