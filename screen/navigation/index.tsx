import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "../Home";
import Login from "../Login/Login";
import RegisterName from "../Register/RegisterName";
import RegisterPassWord from "../Register/RegisterPassword";
import Search from "../Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../main/Main";
const Stack = createNativeStackNavigator();
export default function RootComponent() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RegisterName" component={RegisterName} />
          <Stack.Screen name="RegisterPassWord" component={RegisterPassWord} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
