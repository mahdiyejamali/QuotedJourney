import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button } from 'react-native';
import {storyLines} from '../constants/story1';
import * as Notifications from 'expo-notifications';

export default function Story() {
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = 5;
    const onPageClick = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    }
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
                seconds: 5,
            }
        })
    }
    return (
        <View style={styles.container}>
            {currentPage == 1 && <Pressable onPress={onPageClick}>
                <Image
                    style={styles.storyPage}
                    source={require("../assets/story1/1.png")}
                />
                <Text>{storyLines[1]}</Text>
            </Pressable>}

            {currentPage == 2 && <Pressable onPress={onPageClick}>
                <Image
                    style={styles.storyPage}
                    source={require("../assets/story1/2.png")}
                />
                <Text>{storyLines[2]}</Text>
            </Pressable>}

            {currentPage == 3 && <Pressable onPress={onPageClick}>
                <Image
                    style={styles.storyPage}
                    source={require("../assets/story1/3.png")}
                />
                <Text>{storyLines[3]}</Text>
            </Pressable>}

            {currentPage == 4 && <Pressable onPress={onPageClick}>
                <Image
                    style={styles.storyPage}
                    source={require("../assets/story1/4.png")}
                />
                <Text>{storyLines[4]}</Text>
            </Pressable>}

            {currentPage == 5 && <Pressable onPress={onPageClick}>
                <Image
                    style={styles.storyPage}
                    source={require("../assets/story1/5.png")}
                />
                <Text>{storyLines[5]}</Text>
            </Pressable>}

            <Button title='Read Again' onPress={() => setCurrentPage(1)}  />
            <Button title='Start My Journey' onPress={startJourney} />
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
  storyPage: {
    width: 350,
    height: 350,
  },
});
  
