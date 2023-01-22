import { Pressable, Image, ImageSourcePropType } from 'react-native';
import Animated, { FadeIn, FadeOut } from    'react-native-reanimated';
import { Text } from '@ui-kitten/components';

interface StoryPageProps {
    onClick: () => void;
    source: ImageSourcePropType;
    text: string;
}

export const StoryPage = (props: StoryPageProps) => {
    return (
        <Pressable onPress={props.onClick}>
            <Image
                style={{ width: 350, height: 350 }}
                source={props.source}
            />
            <Animated.View
                entering={FadeIn.duration(2000)}
                exiting={FadeOut.duration(100)}
            >
                <Text>{props.text}</Text>
            </Animated.View>
        </Pressable>
    );
}
