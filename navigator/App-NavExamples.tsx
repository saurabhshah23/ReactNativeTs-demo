import * as React from "react";
import { View, Text, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import About from "./screens/About";
import { ProfileScreen, CustomTitleScreen, LogoTitle } from "./Screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}

        <Stack.Screen name="SignIn">
          {(props) => <SignIn {...props} extraData={{ name: "Saurabh" }} />}
        </Stack.Screen>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "App Home",
            headerStyle: {
              backgroundColor: "#00f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ name: "", age: 0 }}
          options={({ route, navigation }) => ({
            title: route.params.name ? route.params.name : "Abt",
          })}
        />
        <Stack.Screen
          name="CustomTitle"
          component={CustomTitleScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#00f"
              />
            ),
          }}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
