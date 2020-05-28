import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const About = ({ navigation, route }) => {
  const setNewTitle = () => {
    let currTime = new Date();
    navigation.setOptions({ title: "New-" + currTime.toString() });
  };

  return (
    <View>
      <Text>About screen</Text>
      <Text>Name: {route.params.name}</Text>
      <Text>Age: {route.params.age}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Update Title" onPress={setNewTitle} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
