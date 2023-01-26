import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ImageSourcePropType } from 'react-native';
import { Layout, Icon, TopNavigationAction, TopNavigation, Divider } from '@ui-kitten/components';

import { QuotePage } from './QuotePage';

import api from '../api';

const BackIcon = (props: any) => (
    <Icon {...props} name='home' />
);

export const QuoteDisplay = ({ route, navigation }: any) => {
    const { tags, ...otherParams } = route.params;
    const tagsList = tags.split('|');
    console.log({tags})
    // Navigation to back
    const navigateHome = () => {
        navigation.goBack();
    };
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateHome}/>
    );

    const [currentQuote, setCurrentQuote] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const LAST_PAGE = 100;
    const onPageClick = () => {
        if (currentPage <= LAST_PAGE) {
            setCurrentPage(currentPage + 1);
        }
    }

    // fetch Quotable
    useEffect(() => {
        async function fetchData() {
            const response = await api.quotable.getRandomQuote({tags});
            console.log(response.content + ' ' + response.author);
            setCurrentQuote(`${response.content}\n--${response.author}`);
        }
        fetchData();
    }, [currentPage]);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Home' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>

            <Layout style={styles.container}>
                <QuotePage 
                    key={currentPage.toString()}
                    onClick={onPageClick}
                    text={currentQuote}
                    topics={[]}
                />
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  restartButton: {
    marginBottom: 8,
  }
});
  
