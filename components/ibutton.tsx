import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onpress: () => void;
}
export default function ibutton({icon, label, onpress} : props) {
    return (
        <Pressable onPress={onpress}>
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text>{label}</Text>
        </Pressable>
    )
}
const s = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color : "#fff",
        marginTop:12,
    }
})