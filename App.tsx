import { StyleSheet, View } from 'react-native';
import Story from './components/Story';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';

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
    <View style={styles.container}>
      <Story />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
