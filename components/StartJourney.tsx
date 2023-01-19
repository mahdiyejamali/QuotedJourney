import React from 'react';
import * as Notifications from 'expo-notifications';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

export const StartJourney = ({ navigation }: any) => {
  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateHome}/>
  );

  const startJourney = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'My first local notification',
            body: 'This is the body of the notification',
            data: {
                userName: 'TestUser',
            }
        },
        trigger: {
            seconds: 1,
            // hour: 19,
            // minute: 45,
            // repeats: true,
        }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Home' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Start My Journey</Text>
        <Button onPress={startJourney}>Schedule Notification</Button>
      </Layout>
    </SafeAreaView>
  );
};