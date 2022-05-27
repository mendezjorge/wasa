import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../../screens/chatList";
import ContactScreen from "../../screens/contacts";
import SettingScreen from "../../screens/settings";
import IconChat from "../../assets/icons/chatIcon";
import IconContact from "../../assets/icons/contactIcon";
import IconSetting from "../../assets/icons/settingIcon";

const ChatIcon = () => {
  return <IconChat height="50" width="50"></IconChat>;
};
const ContactIcon = () => {
  return <IconContact height="80" width="80"></IconContact>;
};

const SetingIcon = () => {
  return <IconSetting height="30" width="30" />;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <ChatIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <ContactIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SetingIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
