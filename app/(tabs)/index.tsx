import { Text, View, StyleSheet } from "react-native";
const PlaceholderImage = require('@/assets/images/background-image.png');
import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Cbutton from "@/components/cbutton";
import Ibutton from "@/components/ibutton";
import Epicker from "@/components/emojipicker";
import EmjList from "@/components/emjlist";
import { type ImageSource } from "expo-image";
import EmjSticker from "@/componets/emjsticker";



export default function Index() {
  const [selimg, setselimg] = useState<string | undefined>(undefined);
  const [showappoptions, setshowappoptions] = useState<boolean>(false);
  const [isemojipickeron, setemojipickero] = useState<boolean>(false);
  const [pickedemj, setpickedemj] = useState<ImageSource | undefined>(undefined);
  const pickimgsync = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
    });
    if (!res.canceled) {
      setselimg(res.assets[0].uri);
      setshowappoptions(true);
    } else {
        alert("You did not select any image.");
    }
};
const onreset = () => {
  setshowappoptions(false);
}
const addsticker = () => {
  setemojipickero(true);
}
const closesticker = () => {
  setemojipickero(false);
}
const saveimage = async() => {
}
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <ImageViewer imgSource={PlaceholderImage} selimg={selimg}/>
      </View>
      {showappoptions ? (
        <View style={styles.optionsc}>
          <View style={styles.optionsrow}>
          <Ibutton icon="refresh" label="Reset" onpress={onreset}/>
          <Cbutton onpress={addsticker}/>
          <Ibutton icon="save-alt" label="Save" onpress={saveimage}/>
          </View>
        </View>
      ) : (
      <View style={styles.footercontainer}>
        <Button label="Choose a photo" theme="primary" onpress={pickimgsync}/>
        <Button label="Use this photo" onpress={() => setshowappoptions(true)}/>
      </View>
      )}
      <Epicker onclose={closesticker} visible={isemojipickeron}>
        <EmjList onsel={setpickedemj} onclose={closesticker}/>
      </Epicker>  
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
  optionsc: {
    bottom:80,
    position: "absolute",
  },
  optionsrow: {
    alignItems: "center",
    flexDirection: "row",
  }
})