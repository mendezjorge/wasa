// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import InChat from "../../screens/chat";
import InAppNavigation from "../tabAppNav";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InApp">
        <Stack.Screen
          name="InApp"
          component={InAppNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InChat"
          component={InChat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
