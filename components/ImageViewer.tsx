import { StyleSheet } from "react-native";
import { Image, type ImageSource} from "expo-image";

type Props= {
    imgSource: ImageSource;
    selimg?: string;
}

export default function ImageViewer({imgSource, selimg}: Props) {
    const imgsrc = selimg ? { uri: selimg } : imgSource
    return <Image source={imgsrc} style={styles.image}/>;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      }, 
})