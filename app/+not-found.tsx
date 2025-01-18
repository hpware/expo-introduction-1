import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function notfound() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops! Not Found' }} />
    <View style={styles.container}>
        <Link href="/" style={styles.button}>
            Go back to home.
        </Link>
    </View>
    </>
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