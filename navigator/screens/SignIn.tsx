import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button
        title="Sign In again..."
        onPress={() => navigation.push("SignIn")}
      />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Push Home" onPress={() => navigation.push("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
