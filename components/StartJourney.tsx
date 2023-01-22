import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform, SafeAreaView } from 'react-native';
// import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, CheckBox } from '@ui-kitten/components';
// import { Timepicker } from './TimePicker';

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

export const StartJourney = ({ navigation }: any) => {
  // Navigation Home
  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateHome}/>
  );

  const [date, setDate] = useState(new Date(1598051730000));
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

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
        <Divider />

        <CheckBox>Send me reminders</CheckBox>
        {/* <Button onPress={showDatepicker}>Show date picker!</Button>
        <Button onPress={showTimepicker}>Show time picker!</Button> */}
        <Text>selected: {date.toLocaleString()}</Text>
        {/* <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'time'}
            is24Hour
            onChange={onChange}
        /> */}
        {/* <Timepicker
          onSelect={date => console.log(date) }
          // value={date}
          // is24Hour
          // onChange={onChange}
        /> */}
        <Divider />

        <Button onPress={startJourney}>Schedule Notification</Button>
      </Layout>
    </SafeAreaView>
  );
};