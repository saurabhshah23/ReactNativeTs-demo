import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Hello from "./components/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>

      <Hello name="John" />
      <Hello name="Jacob" enthusiasmLevel={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
