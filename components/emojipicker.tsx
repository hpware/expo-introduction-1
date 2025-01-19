import { Modal, View, Text, Pressable, StyleSheet} from "react-native";
import { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type props = PropsWithChildren<{
    visible: boolean;
    onclose: () => void;
}>

export default function emjpicker({ visible, onclose, children} : props) {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={s.content}>
                <View style={s.container}>
                    <Text style={s.title}>Choose a Sticker</Text>
                    <Pressable onPress={onclose}>
                        <MaterialIcons name="close" color="#fff" size={22}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}
const s = StyleSheet.create({
    content: {
        height: "25%",
        width:"100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    container: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    title : {
        color: "#fff",
        fontSize:16,
    }
})