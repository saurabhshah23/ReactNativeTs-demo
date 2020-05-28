import React from "react";
import { Button, Text, View, Image } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Button
        title="React Native by Example"
        onPress={() => navigation.push("Details", { name: "RN by Example" })}
      />
      <Button
        title="React Native School"
        onPress={() => navigation.push("Details", { name: "RN School" })}
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
export function Details({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Details Screen | name={route.params.name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
export function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Search Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Search2" onPress={() => navigation.push("Search2")} />
      <Button
        title="Home > RN School"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Details",
            params: {
              name: "RN School from Search",
            },
          })
        }
      />
    </View>
  );
}
export function Search2({ navigation }) {
  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <Text>Search2 Screen</Text>
    </View>
  );
}

// Custom screen for trial}
export function CustomTitleScreen({ navigation }) {
  return (
    <View>
      <Text>CustomTitle Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export function LogoTitle() {
  return (
    <>
      {/* <Image
      style={{ width: 50, height: 50 }}
      source="https://reactnative.dev/img/showcase/facebook.png"
    /> */}
      <Text style={{ color: "cyan" }}>Logo Title</Text>
      <Text style={{ color: "cyan" }}>Logo Title</Text>
    </>
  );
}
