import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textHead}>Instagram</Text>
      </View>
      <View style={styles.blockIcon}>
        <Ionicons
          style={styles.iconPassword}
          name="heart-outline"
          size={26}
          color={"blue"}
        />
        <Ionicons
          style={styles.iconPassword}
          name="search"
          size={26}
          color={"blue"}
        />
        <FontAwesome5
          style={styles.iconPassword}
          name="telegram-plane"
          size={26}
          color={"blue"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
  },
  textHead: {
    fontSize: FontSize.h2,
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconPassword: {
    marginHorizontal: 6,
    padding: 10,
  },
  story: {
    flexDirection: "row",
    marginBottom: 24,
  },
  userName: {
    fontSize: FontSize.h6,
    textAlign: "center",
  },
  imgUser: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "cover",
  },
  imgNews: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: "cover",
  },
  imgNewMain: {
    width: "100%",
    height: 460,
    resizeMode: "cover",
  },
  icon: {
    position: "absolute",
    top: 34,
    right: 5,
    backgroundColor: "white",
    padding: 2,
    borderRadius: 16,
  },
});
