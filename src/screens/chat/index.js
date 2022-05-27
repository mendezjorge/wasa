// In App.js in a new project

import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "1",
    origin: 2,
    title: "First Item",
  },
  {
    id: "2",
    origin: 2,
    title: "Second Item",
  },
  {
    id: "3",
    origin: 2,
    title: "Third Item",
  },
  {
    id: "4",
    origin: 2,
    title:
      "este va a ser un mensaje largo o mediano vvamos a ver como se comporta",
  },
  {
    id: "5",
    origin: 2,
    title: "Third Item",
  },
  {
    id: "6",
    origin: 2,
    title: "Third Item",
  },
  {
    id: "7",
    origin: 2,
    title: "Third Item",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 30 : 0,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
  },
  textInput: {
    height: 40,
    backgroundColor: "white",
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    borderColor: "#BCC5D7",
    borderWidth: 1,
    borderRadius: 48,
  },
  messages: {
    backgroundColor: "blue",
  },
});

function renderItem({ item }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 1,
        maxWidth: "70%",
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "green",
          borderRadius: 36,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#F0F4FE",
          padding: 8,
          marginHorizontal: 8,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#606A82",
            fontWeight: "400",
            lineHeight: 24,
          }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  );
}

function HomeScreen() {
  const [message, setmessage] = useState(DATA);
  const [escrito, setEscrito] = useState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
      keyboardVerticalOffset={90}
    >
      <View style={styles.inner}>
        <FlatList
          style={{ marginTop: 5 }}
          data={message}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.btnContainer}>
          <TextInput
            style={{
              paddingVertical: 5,
              marginHorizontal: 10,
              marginVertical: 5,
            }}
            value={escrito}
            onChangeText={setEscrito}
            placeholderTextColor="#BBC3D3"
            placeholder="Escribe un mensaje"
          ></TextInput>
          <Button
            title="Enviar"
            onPress={(Keyboard) => {
              Keyboard.dismiss;
              const newMensaje = [
                ...message,
                {
                  id: Math.random(),
                  origin: 1,
                  title: escrito,
                },
              ];
              setmessage(newMensaje);
              setEscrito();
            }}
          ></Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "En el chat" }}
      />
    </Stack.Navigator>
  );
}

export default App;
