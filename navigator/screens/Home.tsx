import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button
        title="About"
        onPress={() =>
          navigation.navigate("About", { name: "Saurabh", age: 30 })
        }
      />
      {/* <Button
        title="Go Profile Screen"
        onPress={() => navigation.navigate("ProfileScreen")}
      /> */}
      <Button
        title="Go Custom Header"
        onPress={() => navigation.navigate("CustomTitle")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
