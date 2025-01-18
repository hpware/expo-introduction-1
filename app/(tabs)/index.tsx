import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
const PlaceholderImage = require('@/assets/images/background-image.png');
import ImageViewer from "@/components/ImageViewer"


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    color: "#fff",
  },
  imgcontainer: {
    flex: 1,
  },
})