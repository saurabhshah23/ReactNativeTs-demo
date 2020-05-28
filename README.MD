# Demo app for React Native in Typescript with react-navigation v5

This app is created to learn react native using typescript via expo.
Hello component - first TS component in react native as per docs.
ref: https://reactnative.dev/docs/typescript

- Clone the repository and run `npm i` in the project root
- Run `npm start` to start the packager
- Follow the instructions to open it with the [Expo app](https://expo.io/)

=============================================
Commands I used:

```
- expo init AwesomeProjectTS // choose appropriate template. blank TS template in this case.
- cd AwesomeProjectTS
- npm start
  Voila! you have your first RN TS project ready.
```

If you face problems, follow:

```
- delete package-lock.json
- npm cache clean --force
- npm i
- npm start
  This time it should definitely work.
```

=============================================

# "react-navigation v5" for routing in app.

ref: https://reactnavigation.org/docs/hello-react-navigation

```
npm i --save @react-navigation/native @react-navigation/stack @react-navigation/drawer @react-navigation/bottom-tabs

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm start
```

native is core package,
stack = stackNavigator,
expo install are all the dependencies react-navigation needs.

drawer = drawerNavigator,
bottom-tabs = bottomTabNavigator

# NOTES

```
Navigation:
Below are 3 navigators that can be nested within one-another.

Stack.Navigator - for header based navigation with back buttons.
Tab.Navigator   - for bottom bar tab based navigation.
Drawer.Navigator- for tray / drawer based navigation.

navigation.navigate for full stack change.
navigation.push for all other purpose. It maintains good history.
// use this to navigate to specific screen in other component navigator.
navigation.navigate('Root', {
  screen: 'Settings',
  params: { user: 'jane' },
});

- Stack.Navigator is a component that takes route configuration as its children with additional props for configuration and renders our content.
- navigation.navigate("route") is used to navigate to new screen.
- navigation.push("route") is used to navigate and add history irrespective of current route.
- navigation.goBack() for back action

// pass params to routes & set initialParams as default in
- navigation.navigate("route", {name:"Saurabh"})
- <Stack.Screen ... initialParams={{ name:"" }} />

// set options from within the component.
- navigation.setOptions({title:"New Title"})

// Custom Header bar - Component will be rendered in header - headerLeft will override the back button.
- Screen options={{headerTitle: props=><Component />, headerRight: ()=><Component />, headerLeft: ()=><Component />}}


//
```
