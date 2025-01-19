import { View } from "react-native";
import { Image, type ImageSource} from "expo-image";

type props = {
    imgsize: number;
    stickersrc: ImageSource;
}

export default function emjsticker({imgsize, stickersrc} : props) {
    return (
        <View style={{top: -350}}>
            <Image source={stickersrc} style={{ width: imgsize, height: imgsize}} />
        </View>
    );
}