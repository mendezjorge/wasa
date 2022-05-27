import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={HomeScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
}

export default App;
