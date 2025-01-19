import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable, Platform } from "react-native";
import { Image, type ImageSource } from "expo-image";

type props = {
    onsel: (Image: ImageSource) => void;
    onclose: () => void;
}
export default function EmojiList({ onsel, onclose }: props) {
    const [emoji] = useState<ImageSource[]>([
      require("../assets/images/emoji1.png"),
      require("../assets/images/emoji2.png"),
      require("../assets/images/emoji3.png"),
      require("../assets/images/emoji4.png"),
      require("../assets/images/emoji5.png"),
      require("../assets/images/emoji6.png"),
    ]);
    return (
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            contentContainerStyle={s.container}
            renderItem={({item, index}) => (
                <Pressable onPress={() => {
                    onsel(item);
                    onclose();
                }}
                >
                    <Image source={item} style={s.image} key={index}/>
                </Pressable>
            )}
            />
    );
}
const s = StyleSheet.create({
    container: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
      },
})