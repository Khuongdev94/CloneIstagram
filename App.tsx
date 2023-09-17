import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Describe from "./component/Describe";
import Home from "./screen/Home";
import Login from "./screen/Login/Login";
import RegisterName from "./screen/Register/RegisterName";
import RegisterPassWord from "./screen/Register/RegisterPassword";
import Search from "./screen/Search/Search";
export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      {/* <Login></Login> */}
      {/* <RegisterName></RegisterName> */}
      {/* <RegisterPassWord></RegisterPassWord> */}
      {/* <Describe
        numberLike="123 Likes"
        numberComment={24}
        userComment="thung"
        contentComment=" Are your ok ?"
      ></Describe> */}
      {/* <Search></Search> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
