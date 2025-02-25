import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type props = {
    onpress: () => void;
}

export default function cbutton({onpress} : props) {
    return (
        <View style={s.container}>
            <Pressable onPress={onpress} style={s.button}>
                <MaterialIcons name="add" size={38} color="@25292e"/>
            </Pressable>
        </View>
    )
}
const s = StyleSheet.create({
    container: {
        width: 84,
        height:84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 42,
        padding:3,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: "#fff"
    }
})