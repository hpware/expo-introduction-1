import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Image, type ImageSource} from "expo-image";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type props = {
    imgsize: number;
    stickersrc: ImageSource;
}

export default function emjsticker({imgsize, stickersrc} : props) {
    const scaleimg = useSharedValue(imgsize);
    const translatex = useSharedValue(0);
    const translatey = useSharedValue(0);
    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleimg.value !== imgsize * 2) {
            scaleimg.value = scaleimg.value * 2;
        } else {
            scaleimg.value = Math.round(scaleimg.value / 2);
        }
    })
    const imgstyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleimg.value),
            height: withSpring(scaleimg.value),
        }
    })
    const drag = Gesture.Pan().onChange(event => {
        translatex.value += event.changeX;
        translatey.value += event.changeY;
    });
    const cstyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translatex.value
                },
                {
                    translateY: translatey.value
                }
            ]
        }
    })
    return (
        <GestureDetector gesture={drag}>
        <Animated.View style={[cstyle, {top: -350}]}>
            <GestureDetector gesture={doubleTap}>
                <Animated.Image source={stickersrc} style={[imgstyle, { width: imgsize, height: imgsize}]} resizeMode="contain"/>
            </GestureDetector>
        </Animated.View>
        </GestureDetector>
    );
}
