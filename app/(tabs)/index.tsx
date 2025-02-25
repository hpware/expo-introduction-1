import { Text, View, StyleSheet } from "react-native";
const PlaceholderImage = require('@/assets/images/background-image.png');
import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/button";
import * as ImagePicker from "expo-image-picker";
import { useState, useRef } from "react";
import Cbutton from "@/components/cbutton";
import Ibutton from "@/components/ibutton";
import Epicker from "@/components/emojipicker";
import EmjList from "@/components/emjlist";
import { type ImageSource } from "expo-image";
import EmjSticker from "@/components/emjsticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { requestPermissionsAsync } from "expo-media-library";
import  * as medialib from "expo-media-library";
import { captureRef } from "react-native-view-shot";


export default function Index() {
  const [selimg, setselimg] = useState<string | undefined>(undefined);
  const [showappoptions, setshowappoptions] = useState<boolean>(false);
  const [isemojipickeron, setemojipickero] = useState<boolean>(false);
  const [pickedemj, setpickedemj] = useState<ImageSource | undefined>(undefined);
  const [status, requestperms] = medialib.usePermissions();
  const imgref = useRef<View>(null);
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
if (status === null) {
  requestperms();
}
const onreset = () => {
  setselimg(undefined);
  setpickedemj(undefined);
  setshowappoptions(false);
}
const addsticker = () => {
  setemojipickero(true);
}
const closesticker = () => {
  setemojipickero(false);
}
const saveimage = async() => {
  try {
    const localUri = await captureRef(imgref, {
      height:400,
      quality:1
    });
    await medialib.saveToLibraryAsync(localUri);
    if (localUri) {
      alert("Saved");
    }
  } catch (e) {
    console.log(e);
    alert(`${e}`);
  }
}
  return (
    <GestureHandlerRootView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <View collapsable={false} ref={imgref}>
        <ImageViewer imgSource={PlaceholderImage} selimg={selimg}/>
        {pickedemj && <EmjSticker stickersrc={pickedemj} imgsize={44} />}
        </View>
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
    </GestureHandlerRootView>
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