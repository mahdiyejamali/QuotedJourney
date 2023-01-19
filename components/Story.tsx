import { useState } from 'react';
import { StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';
import { storyLines } from '../constants/story1';
import { Button, Layout, Text, Icon, TopNavigationAction, TopNavigation, Divider } from '@ui-kitten/components';

const BackIcon = (props: any) => (
    <Icon {...props} name='arrow-back' />
);

export const Story = ({ navigation }: any) => {
    // Navigation to back
    const navigateHome = () => {
        navigation.goBack();
    };
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateHome}/>
    );

    // Navigation to schedule my plan
    const navigateStartJourney = () => {
        navigation.navigate('StartJourney');
    };

    const [currentPage, setCurrentPage] = useState(1);
    const LAST_PAGE = 5;
    const onPageClick = () => {
        if (currentPage <= LAST_PAGE) {
            setCurrentPage(currentPage + 1);
        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Home' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>

            <Layout style={styles.container}>
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

                {currentPage > LAST_PAGE && 
                    <>
                        <Button onPress={() => setCurrentPage(1)}>Read Again</Button>
                        <Button onPress={navigateStartJourney}>Start My Journey</Button>
                    </>
                }
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  storyPage: {
    width: 350,
    height: 350,
  },
});
  
