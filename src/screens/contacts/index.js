import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Contacts" }}
      />
    </Stack.Navigator>
  );
}

export default App;
