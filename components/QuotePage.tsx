import { Pressable, Image, ImageSourcePropType } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut, FadeOutDown } from 'react-native-reanimated';
import { Text } from '@ui-kitten/components';

interface QuotePageProps {
    onClick: () => void;
    source: ImageSourcePropType;
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
            {/* <Image
                style={{ width: 350, height: 350 }}
                source={props.source}
            /> */}
            <Animated.View
                entering={FadeInDown.duration(2000)}
                exiting={FadeOutDown.duration(100)}
            >
                <Text>{props.text}</Text>
            </Animated.View>
        </Pressable>
    );
}
