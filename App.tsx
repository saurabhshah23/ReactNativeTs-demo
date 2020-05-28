import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Navigation
import AppNavExample from "./navigator/App-NavExamples";
import NavComponent from "./navigator/Navigators";
import AuthScreen from "./navigator/Auth";

const Stack = createStackNavigator();

function App() {
  return (
    <>
      {/* <AuthScreen /> */}

      {/* Drawer, Bottom-Tabs, Stack Navigator demo. */}
      {/* 1 error in red - error is caused by using Drawer Navigator. Its an open error in Git. */}
      <NavComponent />

      {/* All initial trials of react-navigation */}
      {/* <AppNavExample /> */}
    </>
  );
}

export default App;
