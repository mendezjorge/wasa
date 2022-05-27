import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackAppNav from "./src/navigation/stackAppNav";

export default function App() {
  return <StackAppNav></StackAppNav>;
}

/*
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
