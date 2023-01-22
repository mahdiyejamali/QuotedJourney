import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Layout, Icon, TopNavigationAction, TopNavigation, Divider } from '@ui-kitten/components';

import { storyLines } from '../constants/story1';
import { StoryPage } from './StoryPage';

const BackIcon = (props: any) => (
    <Icon {...props} name='arrow-back' />
);

const PAGE_IMAGE_MAP = {
    1: require('../assets/story1/1.png'),
    2: require('../assets/story1/2.png'),
    3: require('../assets/story1/3.png'),
    4: require('../assets/story1/4.png'),
    5: require('../assets/story1/5.png'),
}

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
                {[1, 2, 3, 4, 5].map((pageNumber) => {                    
                    return currentPage == pageNumber && <StoryPage 
                        key={pageNumber}
                        onClick={onPageClick}
                        source={PAGE_IMAGE_MAP[pageNumber]}
                        text={storyLines[pageNumber]}
                    />
                })}

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
});
  
