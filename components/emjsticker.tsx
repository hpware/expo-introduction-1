import { View } from "react-native";
import { Image, type ImageSource} from "expo-image";

type props = {
    imgsize: number;
    stickersrc: ImageSource;
}

export default function emjpicker({imgsize, stickersrc} : props) {
    return (
        <View style={{top: -20}}>
            <Image source={stickersrc} style={{ width: imgsize, height: imgsize}} />
        </View>
    );
}