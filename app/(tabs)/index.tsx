import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this asd.</Text>
      <Link href="/about" style={styles.button}>
        Go To About
      </Link>
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
  text: {
    color: "#fff",
  },
  button: {
    color: "#fff",
    fontSize: 18,
    textDecorationLine: "underline",
  }
})