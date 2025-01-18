import { Text, View, StyleSheet } from "react-native";
const PlaceholderImage = require('@/assets/images/background-image.png');
import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/button";



export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footercontainer}>
        <Button label="Choose a photo" theme="primary"/>
        <Button label="Use this photo"/>
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
  footercontainer: {
      flex: 1 / 3,
      alignItems: 'center',
  },
})