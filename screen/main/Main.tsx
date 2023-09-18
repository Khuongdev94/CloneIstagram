import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Home";
import Search from "../Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "../setting/Setting";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: { route: any }) => ({
  headerShown: false,
  tabBarActiveTintColor: "blue",
  tabBarInactiveTintColor: "black",
  tabBarActiveBackgroundColor: "#A3E4D7",
  tabBarInactiveBackgroundColor: "#EBEDEF",
  tabBarBackground: () => <View style={{ backgroundColor: "red" }}></View>,
  tabBarIcon: ({ focused }: { focused: any }) => {
    return (
      <Ionicons
        name={
          route.name == "Home"
            ? "home"
            : route.name == "Search"
            ? "search"
            : route.name == "Setting"
            ? "settings"
            : ""
        }
        size={24}
        color={focused ? "blue" : "black"}
      />
    );
  },
});

export default function Main() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
