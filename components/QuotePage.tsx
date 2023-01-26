import { Pressable, Image } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Text } from '@ui-kitten/components';

interface QuotePageProps {
    onClick: () => void;
    text: string;
    key: string;
    topics: string[],
}

export const QuotePage = (props: QuotePageProps) => {
    return (
        <Pressable onPress={props.onClick}>
            <Image
                key={props.key}
                style={{ width: 350, height: 350 }}
                source={{uri: 'https://source.unsplash.com/random/200x200?topics=' + props.key + props.topics.join(',')}}
            />
            <Animated.View
                entering={FadeInDown.duration(2000)}
                exiting={FadeOutDown.duration(100)}
            >
                <Text>{props.text}</Text>
            </Animated.View>
        </Pressable>
    );
}
