// In App.js in a new project

import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../chat";

import useMensajes from "../../customHooks/getMensajeList";

const styles = StyleSheet.create({
  containerGral: {
    backgroundColor: "#E5E5E5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  container: {
    padding: 15,
    flex: 1,
    flexDirection: "row",
    height: 90,
  },
  containerText: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: { width: 63, height: 63, borderRadius: 32 },
  username: {
    color: "#3C424F",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
  },
  lastmessage: {
    color: "#606A82",
    fontSize: 14,
  },
  datelastmessage: {
    color: "#BBC3D3",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 24,
  },
});

function goToChat(navigation) {
  return navigation.push("InChat");
}

function CardMessage({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        goToChat(navigation);
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.avatar }} style={styles.image}></Image>
      <View style={styles.containerText}>
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.lastmessage}>{item.lastmessage}</Text>
        </View>
        <View>
          <Text style={styles.datelastmessage}>
            {item.datelastmessage.slice(0, 7)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function SeparadorComponent() {
  return (
    <Text
      style={{ backgroundColor: "#BCC5D7", height: 2, marginHorizontal: 15 }}
    ></Text>
  );
}

function BuscadorComponent() {
  return <Text>Aca va a ir un buscado</Text>;
}

function HomeScreen({ navigation }) {
  const mensajes = useMensajes();

  return (
    <View style={styles.containerGral}>
      <FlatList
        data={mensajes}
        ItemSeparatorComponent={() => {
          return <SeparadorComponent></SeparadorComponent>;
        }}
        keyExtractor={(item, index) => item + index}
        renderItem={({ index, item }) => {
          return (
            <CardMessage
              key={index}
              item={item}
              navigation={navigation}
            ></CardMessage>
          );
        }}
        ListHeaderComponent={() => <Text style={styles.title}>Chat</Text>}
      ></FlatList>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={HomeScreen}
        options={{
          headerRight: (props) => (
            <Button
              title="New"
              onPress={() => {
                // Do something
              }}
            />
          ),
          title: "Chats",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default App;
