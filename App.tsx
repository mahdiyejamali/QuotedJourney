import React, { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Button } from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/HomeNavigator';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => {
      return {
          shouldPlaySound: true,
          shouldSetBadge: true,
          shouldShowAlert: true,
      };
  }
});

export default function App() {
  // check permissions
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return statusObj;
    }).then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return;
        }
    })
  }, []);

  // handle notification
  useEffect(() => {
    const receivedSubscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log('NOTIFICATION RECEIVED');
      console.log(notification.request.content.data.userName)
    });

    const responseSubscription = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('NOTIFICATION RESPONSE RECEIVED', response);
      console.log(response.notification.request.content.data.userName)
    });

    return () => {
      receivedSubscription.remove();
      responseSubscription.remove();
    }
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  );

}
