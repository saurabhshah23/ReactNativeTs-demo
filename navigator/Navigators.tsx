import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  HomeScreen,
  ProfileScreen,
  Details,
  SearchScreen,
  Search2,
} from "./Screens";

/**
 * Trying to acheive below nested Navigation/Routing.
 *
 * Home Scr     - STACK.NAV & TABS.NAV
 *              Details Scr
 *              Drawer
 * Profile Scr  - DRAWER.NAV
 *              Details Scr
 *              Drawer
 */

// Nav stack inside Home Tab
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);
// Nav stack inside Profile Tab
const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

// Main Nav with Tabs
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

function Navigators() {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
}

export default Navigators;
